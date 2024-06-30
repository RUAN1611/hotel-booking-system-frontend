import { Component } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
})
export class BookingFormComponent {
  booking: Booking = {
    customerName: '',
    roomNumber: 0,
    checkInDate: '',
    checkOutDate: '',
  };

  constructor(private bookingService: BookingService) {}

  addBooking(): void {
    this.bookingService.addBookings(this.booking).subscribe(() => {
      alert('Booking added');
    });
  }
}
