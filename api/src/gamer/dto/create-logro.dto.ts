import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional,IsString,MaxLength,MinLength } from 'class-validator';
import { Dificultad } from '../enum/logro.enum';

export class CreateRegistroLogro {
  @IsNotEmpty()
  @IsNumber()
  id_gamer:      number;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  titulo:         string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  descripcion:         string;

  
  @IsEnum(Dificultad)
  dificultad:            Dificultad;



  @IsNotEmpty()
  @IsDateString()
  fecha_obtenida:            string;

  
}