import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entities';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
    ) {}
    
    async createBooking(createBookingDto : CreateBookingDto)   {
        const res= await this.bookingRepository.save(createBookingDto);
        return res;
    }
    
    async findAll(){
        const res = await  this.bookingRepository.find();
        return res;
    }

    async FindOnebooking(id: number) {
        const res= await this.bookingRepository.findOne({ where: { id } });
         return res ;
    }

    async update(id:number , updateBookingDto: UpdateBookingDto){
        const oldBooking = await this.bookingRepository.findOneBy({ id: id });
        if(oldBooking){
            oldBooking.totalAmount = updateBookingDto.totalAmount;
            oldBooking.bookingDate = updateBookingDto.bookingDate;
            oldBooking.destination = updateBookingDto.destination;
            const res = await  this.bookingRepository.save(oldBooking);
            return res;
        }
        else {
            return { message: 'Booking not found' };
        }
        
        
    }
     async remove(id: number) {
            const res = await this.bookingRepository.delete(id);
            return res;
     }







}
