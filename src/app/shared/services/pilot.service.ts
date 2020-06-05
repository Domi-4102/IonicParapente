import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pilot } from '../models/pilot';

import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  
  constructor(private httpClient: HttpClient) { }

  addPilot$(pilot: Pilot): Observable<any> {
    return this.httpClient.post<Pilot>('/api/pilots', pilot).pipe(
        tap(_ => console.log('pilot Added')),
        catchError(this.handleError<Pilot[]>('Add pilot', []))
    );
  }

  getPilot$(id): Observable<Pilot> {
    return this.httpClient.get<Pilot>(`/api/pilots/${id}`).pipe(
        tap(_ => console.log('pilot Get One')),
        catchError(this.handleError<Pilot>('Get One pilot', null))
    );
  }

  getPilots$(): Observable<Pilot[]> {
    return this.httpClient.get<Pilot[]>(`/api/pilots`).pipe(
        tap(_ => console.log('Pilot Get All')),
        catchError(this.handleError<Pilot[]>('Get All Pilot', []))
    );
  }

  deletePilot$(id): Observable<any> {
    return this.httpClient.delete(`/api/pilots/${id}`).pipe(
        tap(_ => console.log('Pilot Get One')),
        catchError(this.handleError<Pilot>('Get One Pilot', null))
    );
  }
  
  editPilot$(Pilot:Pilot): Observable<any> {
    return this.httpClient.put<any>(`/api/pilots/${Pilot.id}`,Pilot).pipe(
      tap(_ => console.log('Pilot Get updated')),
      catchError(this.handleError<Pilot>('Pilot Get updated', null))
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