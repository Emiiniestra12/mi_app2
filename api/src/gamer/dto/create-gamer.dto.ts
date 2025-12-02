import { 
    IsString,
    MaxLength,
    MinLength,
    IsOptional,
    IsEnum,
    IsBoolean,
    IsDate,
    IsDateString
} from "class-validator";
import { Type } from "class-transformer";
import { RegistroPartida } from "../entities/partida.entity";
import { RegistroLogro } from "../entities/logro.entity";
import { Nivel } from "../enum/nivel.enum";

export class CreateGamer {
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    nickname:         string;

    @IsEnum( Nivel )
    @IsOptional()
    nivel:          Nivel;

    @IsString()
    @MinLength(3)
    @MaxLength(255)
    pais:     string;

    @IsDateString()
    fecha_registro:  string;

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