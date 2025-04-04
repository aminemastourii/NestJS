import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    @IsString()
      customerID: number;
    
      @IsDate()
      bookingDate: Date;
    
      @IsNumber()
      totalAmount: number;
    
      @IsString()
      destination: string;
}