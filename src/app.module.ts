import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Payment } from './payment/entities/payment.entity';

@Module ({
imports: [  TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_nestjs',
  entities: [Payment],
  synchronize: true,
}),
]
})
@Module({
  imports: [BookingModule, PaymentModule,TypeOrmModule.forRoot() ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}}

