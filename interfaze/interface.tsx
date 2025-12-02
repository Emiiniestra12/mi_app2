export interface GamerResponse{
    id_gamer:   number;
    nickname: string;
    nivel:string;
    pais:string;
    fecha_registro:string;
    activo:boolean;

    }
export interface PartidaResponse{
    id_partida:number;
    id_gamer:number;
    juego:string;
    fecha_partida:string;
    horas_duracion:number;
    resultado:string;
    puntos:number;

}

export interface LogroResponse{
    id_logro:number;
    id_gamer:number
    titulo:string;
    descripcion:string;
    dificultad:string;
    fecha_obtenida:string
    
}