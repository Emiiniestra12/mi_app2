import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Gamer } from "./gamer.entity";
import { Dificultad } from "../enum/logro.enum";

@Entity("RegistroLogro")
export class RegistroLogro{
    @PrimaryGeneratedColumn({ name: "id_logro" })
    id_logro:           number;
    
    @ManyToOne( () => Gamer, (gamer) => gamer.logros )
    @JoinColumn({ name: "id_gamer" })
    gamer:           Gamer;

    @Column()
    titulo:         string;

    @Column()
    descripcion:         string;


    @Column({ type: "enum", enum: Dificultad, default: Dificultad.LOCURA })
    dificultad:              Dificultad;

    @Column({ type: "date" })
    fecha_obtenida:         Date;
}