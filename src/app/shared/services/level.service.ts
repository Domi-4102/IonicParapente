import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Level } from '../models/level';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private httpClient : HttpClient) { }

  addLevel$(level : Level) : Observable<any>{
    return this.httpClient.post<Level>('/api/levels', level).pipe(
      tap(_ => console.log('Added level')),
      catchError(this.handleError<Level[]>('Add level', []))
    );
  }

  getLevel$(id): Observable<Level> {
    return this.httpClient.get<Level>(`/api/levels/${id}`).pipe(
      tap( _ => console.log('Got a level')),
      catchError(this.handleError<Level>('Get one level', null))
    );
  }

  getLevels$(): Observable<Level[]> {
    return this.httpClient.get<Level[]>('/api/levels').pipe(
      tap(_ => console.log('Got a list of levels')),
      catchError(this.handleError<Level[]>('Get all levels', []))
    );
  }

  deleteLevel$(id): Observable<any> {
    return this.httpClient.delete(`/api/levels/${id}`).pipe(
      tap(_ => console.log('Level deleted')),
      catchError(this.handleError<Level>('Level deleted', null))
    );
  }

  editLevel$(id, level : Level): Observable<any> {
    return this.httpClient.put<any>(`/api/levels/${id}`, level).pipe(
      tap (_ => console.log('Level updated')),
      catchError(this.handleError<Level>('Update level', null))
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
