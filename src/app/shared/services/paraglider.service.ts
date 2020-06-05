import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paraglider } from '../models/paraglider';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParagliderService {

  constructor(private httpClient : HttpClient) { }

  addParaglider$(paraglider : Paraglider): Observable<any> {
    return this.httpClient.post<Paraglider>('/api/paragliders', paraglider).pipe(
      tap(_ => console.log('Added paraglider')),
      catchError(this.handleError<Paraglider[]>('Add paraglider', []))
    );
  }

  getParaglider$(id: string) : Observable<Paraglider> {
    return this.httpClient.get<Paraglider>(`/api/paragliders/${id}`).pipe(
      tap(_ => console.log('Got a paraglider')),
      catchError(this.handleError<Paraglider>('Get one paraglider', null))
    );
  }

  getParagliders$(): Observable<Paraglider[]>{
    return this.httpClient.get<Paraglider[]>('/api/paragliders').pipe(
      tap(_ => console.log('Got a list of paragliders')),
      catchError(this.handleError<Paraglider[]>('Get all paragliders', []))
    );
  }

  deleteParaglider$(id): Observable<any> {
    return this.httpClient.delete(`/api/paragliders/${id}`).pipe(
      tap(_ => console.log('Paraglider deleted')),
        catchError(this.handleError<Paraglider>('Paraglider delete', null))
    );
  }

  editParaglider$(id, paraglider : Paraglider): Observable<any> {
    return this.httpClient.put<any>(`/api/paragliders/${id}`, paraglider).pipe(
      tap(_ => console.log('Paraglider updated')),
      catchError(this.handleError<Paraglider>('Update paraglider', null))
    );
  }
  
  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
