import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Nivel } from "../enum/nivel.enum";
import { RegistroLogro } from "./logro.entity";
import { RegistroPartida } from "./partida.entity";
@Entity("Gamer")
export class Gamer {
    @PrimaryGeneratedColumn({ name: "id_gamer" })
    id_gamer:    number;

    @OneToMany( () => RegistroPartida, (partida) => partida.gamer, { eager: false } )
    @JoinColumn({ name: "id_gamer" })
    partida: RegistroPartida[];

    @OneToMany( () => RegistroLogro, (logros) => logros.gamer, { eager: false } )
    @JoinColumn({ name: "id_gamer" })
    logros: RegistroLogro[];

    @Column()
    nickname:         string;

    @Column({type:"enum",enum:Nivel, default:Nivel.NOVATO})
    nivel:     Nivel;

    @Column()
    pais:     string;
    
    @Column({ type: "date" })
    fecha_registro: Date;


    @Column({ type: 'boolean', default: true })
    activo:         boolean;
}