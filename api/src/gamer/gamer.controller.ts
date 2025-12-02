import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query, Req } from '@nestjs/common';
import { GamerService } from './gamer.service';
import { CreateGamer } from './dto/create-gamer.dto';
import { UpdateGamer } from './dto/update-gamer.dto';
import * as express from 'express';
import { CreateRegistroLogro } from './dto/create-logro.dto';
import { CreateRegistroPartida } from './dto/create-partida.dto';
import { QueryRunnerAlreadyReleasedError } from 'typeorm';

@Controller('gamer')
export class GamerController {
    constructor(private readonly gamerService: GamerService) {}

    @Post('registro-logro')
    logro(@Body( new ValidationPipe() ) data: CreateRegistroLogro) {
        return this.gamerService.createRegistroLogro(data);
    }

    @Post('registro-partida')
    partida(@Body( new ValidationPipe() ) data: CreateRegistroPartida) {
        return this.gamerService.createRegistroPartida(data);
    }

    @Post()
    createGamer(@Body( new ValidationPipe() ) data: CreateGamer) {
        return this.gamerService.createGamer(data);
    }

    @Get()
        async findAll(
            @Query('page') page: number = 1,
            @Query('limit') limit: number = 610,
            @Req() req: express.Request
    ) {
            const baseUrl = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
    
            return this.gamerService.findAllGamer(Number(page), Number(limit), baseUrl);
    }

    @Get("activos")
    async getGamerActivos(
        @Query("activo") activo: string = "true"
    ){
        const estado = activo === "true";
        return this.gamerService.getGamersActivos(estado);
    }

    @Get("partidas")
    async getPartidasPorGamer(
    @Query("id_gamer") id_gamer: string
    ){
    return this.gamerService.getPartidasPorGamer(Number(id_gamer));
    }
     @Get("partidas-ganadas")
     async getPartidasGanadas(
     @Query("resultado") resultado: string = "GANO"
     ){
    return this.gamerService.getPartidasGanadas(resultado);
    }
    @Get("logros-dificultad")
    async getLogrosPorDificultad(
    @Query("dificultad") dificultad: string
    ) {
    return this.gamerService.getLogrosPorDificultad(dificultad);
    }

    @Get("partidas-juego")
    async PartidasPorJuego() {
    return this.gamerService.PartidasPorJuego();
    }
    @Get("gamers-pais")
    async gamersPorPais(
    @Query("pais") pais: string
    ) {
    return this.gamerService.getGamersPorPais(pais);
    }


    @Get(':id_gamer')
    findOne(@Param('id_gamer') id_gamer: number) {
        return this.gamerService.findOneGamer(id_gamer);
    }

    @Patch(':id_gamer')
    update(@Param('id_gamer') id_gamer: number, @Body( new ValidationPipe() ) data: UpdateGamer) {
        return this.gamerService.updateGamer(id_gamer, data);
    }

    @Delete(':id_gamer')
    remove(@Param('id_gamer') id_gamer: number) {
        return this.gamerService.removeGamer(id_gamer);
    }

    


}