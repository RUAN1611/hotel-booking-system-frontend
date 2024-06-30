import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api/bookings';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http
      .get<{ data: { bookings: Booking[] } }>(this.apiUrl)
      .pipe(map((response) => response.data.bookings));
  }

  addBookings(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }
}
