import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Gamer } from "./gamer.entity";
import { Resultado } from "../enum/resultado.enum";
@Entity("RegistroPartida")
export class RegistroPartida{
    @PrimaryGeneratedColumn({ name: "id_partida" })
    id_partida:           number;
    
    @ManyToOne( () => Gamer, (gamer) => gamer.logros )
    @JoinColumn({ name: "id_gamer" })
    gamer:           Gamer;

    @Column()
    juego:         string;

    @Column({ type: "date" })
    fecha_partida:         Date;

    @Column()
    horas_duracion:        number;


    @Column({ type: "enum", enum: Resultado, default: Resultado.GANO })
    resultado:              Resultado;

    @Column()
    puntos:         number;
}