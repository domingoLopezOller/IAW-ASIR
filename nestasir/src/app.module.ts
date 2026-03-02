import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { PinturaModule } from './pintura/pintura.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { LibreriaModule } from './libreria/libreria.module';
import { MensajesModule } from './mensajes/mensajes.module';
import { R11Module } from './r11/r11.module';
import { RnnModule } from './rnn/rnn.module';
import { RecambiosModule } from './recambios/recambios.module';



@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), PinturaModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', //URL del servidor
      port: 3306, // Puerto de MySQL
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
}), UsuarioModule, LibreriaModule, MensajesModule, R11Module, RnnModule, RecambiosModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
