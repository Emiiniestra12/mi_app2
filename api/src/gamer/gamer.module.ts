import { Module } from '@nestjs/common';
import { GamerService } from './gamer.service';
import { GamerController } from './gamer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gamer } from './entities/gamer.entity';
import { RegistroPartida } from './entities/partida.entity';
import { RegistroLogro } from './entities/logro.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Gamer,
            RegistroPartida,
            RegistroLogro
        ],"conexion-postgres")
    ],
    controllers: [GamerController],
    providers: [GamerService],
})
export class GamerModule {}