import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  customerID: number;

  @IsDate()
  bookingDate: Date;

  @IsNumber()
  totalAmount: number;

  @IsString()
  destination: string;
}