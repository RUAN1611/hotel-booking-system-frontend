import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css',
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }
}
