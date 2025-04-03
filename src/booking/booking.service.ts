import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {

    createBooking() : string  {
        return 'Booking created successfullyyyyy';
    }
    
    getBookingDetails(bookingId: string):string  {
        return `Details for booking ID: ${bookingId}`;
    }
    
    cancelBooking(bookingId: string): string  {
        return `Booking with ID: ${bookingId} has been canceled`;
    }







}
