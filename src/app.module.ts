import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [ConfigModule.forRoot(),BookingModule, PaymentModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as any,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}


