import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {


  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}


  //create a new payment
  async create(createPaymentDto: CreatePaymentDto) {
     const  res= await this.paymentRepository.save(createPaymentDto);
      return res;
  }
  //get all payments
    findAll(): Promise<Payment[]> {
     return  this.paymentRepository.find();
      }

 //get a payment by id
   findOne(id: number) {
   return  this.paymentRepository.findOne({ where: { id } });
  }

 //update a payment
  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const oldpayment= await this.paymentRepository.findOneBy({ id:id });
    if (!oldpayment) {
      throw new Error(`Payment with id ${id} not found`);
    }
    oldpayment.currency = updatePaymentDto.currency;
    oldpayment.amount = updatePaymentDto.amount;
    return this.paymentRepository.save(oldpayment);
   
  }

 //delete a payment
  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}
