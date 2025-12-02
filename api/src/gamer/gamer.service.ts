import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gamer } from './entities/gamer.entity';
import { RegistroPartida } from './entities/partida.entity';
import { RegistroLogro } from './entities/logro.entity';
import { CreateGamer } from './dto/create-gamer.dto';
import { UpdateGamer } from './dto/update-gamer.dto';
import { CreateRegistroLogro } from './dto/create-logro.dto';
import { CreateRegistroPartida } from './dto/create-partida.dto';
import { Dificultad } from './enum/logro.enum';
import { Nivel } from './enum/nivel.enum';
import { Resultado } from './enum/resultado.enum';
import { Between } from 'typeorm';
import {iif} from 'rxjs';

@Injectable()
export class GamerService {
    constructor(
        @InjectRepository(Gamer, "conexion-postgres")
        private readonly repoGamer: Repository<Gamer>,
        @InjectRepository(RegistroPartida, "conexion-postgres")
        private readonly repoPartida: Repository<RegistroPartida>,
        @InjectRepository(RegistroLogro, "conexion-postgres")
        private readonly repoLogro: Repository<RegistroLogro>,
    ){}

    async createRegistroPartida(data: CreateRegistroPartida) {
        const gamer = await this.findOneGamer( data.id_gamer );

        const{id_gamer,...resto}=data;

        const register = this.repoPartida.create({
            gamer,
            ...resto
        });

        return await this.repoPartida.save( register );
    }

    async createRegistroLogro(data: CreateRegistroLogro) {
        const gamer = await this.findOneGamer( data.id_gamer );

        const {id_gamer, ...resto}=data;

        const register = this.repoLogro.create({
            gamer,
            ...resto 
        });

        return await this.repoLogro.save( register );
    }

    async createGamer(data: CreateGamer) {
        const register = this.repoGamer.create( data );
        return await this.repoGamer.save( register );
    }

    async findAllGamer(page: number = 1, limit: number = 10, baseUrl: string) {

        const [data, total] = await this.repoGamer
            .createQueryBuilder("e")
            .skip( (page - 1) * limit )
            .take(limit)
            .orderBy("e.id_gamer", "ASC")
            .getManyAndCount();

        for (const gamer of data) {
            gamer.partida = await this.repoPartida
                .createQueryBuilder("p")
                .where("p.id_gamer = :id", { id: gamer.id_gamer })
                .orderBy("p.id_partida", "DESC")
                .limit(5)
                .getMany();

            gamer.logros = await this.repoLogro
                .createQueryBuilder("a")
                .where("a.id_gamer = :id", { id: gamer.id_gamer })
                .orderBy("a.fecha_obtenida", "DESC")
                .limit(5)
                .getMany();
        }

        const totalPages = Math.ceil( total/limit );

        const next = (page < totalPages)
            ? `${baseUrl}?page=${Number(page) + 1}&limit=${limit}`
            : null;

        const prev = (page > 1)
            ? `${baseUrl}?page=${Number(page) - 1}&limit=${limit}`
            : null;

        return {
            total,
            totalPages,
            prev,
            next,
            page,
            limit,
            data,
        };
    }

    async findOneGamer(id_gamer: number) {
        const gamer = await this.repoGamer.findOne({
            where: { id_gamer },
            relations: [ "logros", "partida" ]
        });
        if(!gamer) throw new NotFoundException("Gamer no enontrado");
        return gamer;
    }

    async updateGamer(id_gamer: number, data: UpdateGamer) {
        return await this.repoGamer.update(id_gamer, data);
    }

    async removeGamer(id_gamer: number) {
        return await this.repoGamer.delete(id_gamer);
    }

    async getGamersActivos(estado: boolean){
        return await this.repoGamer
        .createQueryBuilder("g")
        .select([
            "g.id_gamer",
            "g.nickname",
            "g.nivel",
            "g.pais",
            "g.fecha_registro",
            "g.activo"
        ])
        .where("g.activo= :estado",{estado})
        .orderBy("g.nickname", "ASC")
        .getRawMany();
    }
    async getPartidasPorGamer(id_gamer: number) {
    return await this.repoPartida
    .createQueryBuilder("p")
    .select([
      "p.id_partida",
      "p.fecha_partida",
      "p.horas_duracion",
      "p.resultado",
      "p.puntos",
      "p.id_gamer"
    ])
    .where("p.id_gamer = :id", { id: id_gamer })
    .orderBy("p.fecha_partida", "DESC")
    .getRawMany();
}
async getPartidasGanadas(resultado: string) {
  return await this.repoGamer
    .createQueryBuilder("g")
    .innerJoin("g.partida", "p") 
    .select([
      "g.id_gamer AS id_gamer",
      "g.nickname AS nickname",
      "g.nivel AS nivel",
      "g.pais AS pais",
      "COUNT(p.id_partida) AS partidas_ganadas"
    ])
    .where("p.resultado = :res", { res: resultado })   
    .groupBy("g.id_gamer")
    .addGroupBy("g.nickname")
    .addGroupBy("g.nivel")
    .addGroupBy("g.pais")
    .orderBy("partidas_ganadas", "DESC")
    .getRawMany();
}
async getLogrosPorDificultad(dificultad: string) {
  return await this.repoGamer
    .createQueryBuilder("g")
    .innerJoin("g.logros", "l")
    .select([
      "g.id_gamer AS id_gamer",
      "g.nickname AS nickname",
      "l.titulo AS titulo",
      "l.descripcion AS descripcion",
      "l.dificultad AS dificultad",
      "l.fecha_obtenida AS fecha_obtenida"
    ])
    .where("l.dificultad = :dif", { dif: dificultad })
    .orderBy("l.fecha_obtenida", "DESC")
    .getRawMany();
}
async PartidasPorJuego() {
  return await this.repoPartida
    .createQueryBuilder("p")
    .select([
      "p.juego AS juego",
      "COUNT(p.id_partida) AS total_partidas"
    ])
    .groupBy("p.juego")
    .orderBy("total_partidas", "DESC")
    .getRawMany();
}
async getGamersPorPais(pais: string) {
  return await this.repoGamer
    .createQueryBuilder("g")
    .select([
      "g.id_gamer",
      "g.nickname",
      "g.nivel",
      "g.pais",
      "g.fecha_registro",
      "g.activo"
    ])
    .where("g.pais = :pais", { pais })
    .orderBy("g.id_gamer", "ASC")
    .getRawMany();
}

}