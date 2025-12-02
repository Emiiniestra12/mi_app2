import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional,IsString,MaxLength,MinLength } from 'class-validator';
import { Resultado } from '../enum/resultado.enum';

export class CreateRegistroPartida{
  @IsNotEmpty()
  @IsNumber()
  id_gamer:      number;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  juego:         string;

  @IsNotEmpty()
  @IsDateString()
  fecha_partida:            string;

  @IsOptional()
  @IsNumber()
  horas_duracion:  number;

  @IsOptional()
  @IsEnum(Resultado)
  resultado:            Resultado;

  @IsNotEmpty()
  @IsNumber()
  puntos:      number;


  
}