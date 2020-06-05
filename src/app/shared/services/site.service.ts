import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private httpClient : HttpClient) { }

  addSite$(site : Site) : Observable<any> {    
    return this.httpClient.post<Site>('/api/sites', site).pipe(
      tap(_ => console.log('Added site')),
      catchError(this.handleError<Site[]>('Add site', []))
    );
  }

  getSite$(id): Observable<Site> {
    return this.httpClient.get<Site>(`/api/sites/${id}`).pipe(
      tap(_ => console.log('Got a site')),
      catchError(this.handleError<Site>('Get one site', null))
    );
  }

  getSites$(): Observable<Site[]>{
    return this.httpClient.get<Site[]>('/api/sites').pipe(
      tap(_ => console.log('Got a list of sites')),
      catchError(this.handleError<Site[]>('Get all sites', []))
    );
  }

  deleteSite$(id): Observable<any> {
    return this.httpClient.delete(`/api/sites/${id}`).pipe(
      tap(_ => console.log('Site deleted')),
        catchError(this.handleError<Site>('Site delete', null))
    );
  }

  editSite$(id, site: Site): Observable<any> {
    return this.httpClient.put<any>(`/api/sites/${id}`, site).pipe(
      tap(_ => console.log('Site updated')),
      catchError(this.handleError<Site>('Update site', null))
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
