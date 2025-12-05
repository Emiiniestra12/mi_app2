import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { Empleado } from './empleados/entities/empleado.entity';
import { GamerModule } from './gamer/gamer.module';
import { Gamer } from './gamer/entities/gamer.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name:"conexion-postgres",
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'Megadeth12',
      database: 'practicas',
      entities:[Empleado],
      synchronize: true,        
      autoLoadEntities: true,   
      logging: true,            
    }),
    EmpleadosModule
    //EmpleadosModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}