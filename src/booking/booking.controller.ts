import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookingService } from './booking.service'; 
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
constructor(private readonly bookingService : BookingService) {}

      @Post("/reserve")
         create(@Body() createBookingDto: CreateBookingDto)   {
         this.bookingService.createBooking(createBookingDto);
     }

     @Get("/all")
         findAll() {
        return this.bookingService.findAll();
     }
       @Get(":id") 
         findOne(@Param()  id: number) {
         return this.bookingService.FindOnebooking(id);
    }
      @Patch("/update/:id")
         update(@Param() id: number,@Body() updateBookingDto: UpdateBookingDto) {
         return this.bookingService.update(id, updateBookingDto);
         }

         @Delete("/delete/:id")
         remove(@Param() id: number) {
         return this.bookingService.remove(id);

      }
   }

     