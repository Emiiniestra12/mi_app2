import { 
    IsString,
    MaxLength,
    MinLength,
    IsOptional,
    IsEnum,
    IsBoolean,
    IsDate
} from "class-validator";
import { Type } from "class-transformer";
import { RegistroPartida } from "../entities/partida.entity";
import { RegistroLogro } from "../entities/logro.entity";
import { Nivel } from "../enum/nivel.enum";

export class UpdateGamer {
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    @IsOptional()
    nickname:         string;

    @IsEnum( Nivel )
    @IsOptional()
    nivel:          Nivel;

    @IsString()
    @MinLength(3)
    @MaxLength(255)
    @IsOptional()
    pais:     string;

    @IsDate()
    @IsOptional()
    fecha_registro:  Date;

    @IsBoolean()
    @IsOptional()
    activo:         boolean;

    @Type( () => RegistroPartida )
    @IsOptional()
    partida?:     RegistroPartida[];

    @Type( () => RegistroLogro )
    @IsOptional()
    logros?:     RegistroLogro[];
}