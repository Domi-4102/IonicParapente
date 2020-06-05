import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient: HttpClient) { }

  addFlight$(flight: Flight): Observable<any> {
    return this.httpClient.post<Flight>('/api/flights', flight).pipe(
        tap(_ => console.log('Flight Added')),
        catchError(this.handleError<Flight[]>('Add Flight', []))
    );
  }

  getFlight$(id): Observable<Flight> {
    return this.httpClient.get<Flight>(`/api/flights/${id}`).pipe(
        tap(_ => console.log('Flight Get One')),
        catchError(this.handleError<Flight>('Get One Flight', null))
    );
  }

  getFlights$(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`/api/flights`).pipe(
        tap(_ => console.log('Flight Get All')),
        catchError(this.handleError<Flight[]>('Get All Flight', []))
    );
  }

  deleteFlight$(id): Observable<any> {
    return this.httpClient.delete(`/api/flights/${id}`).pipe(
        tap(_ => console.log('Flight Get One')),
        catchError(this.handleError<Flight>('Get One Flight', null))
    );
  }
  
  editFlight$(Flight:Flight): Observable<any> {
    return this.httpClient.put<any>(`/api/flights/${Flight.id}`,Flight).pipe(
      tap(_ => console.log('Flight Get updated')),
      catchError(this.handleError<Flight>('Flight Get updated', null))
    );
  }

  handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
} 
