import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  apiURl = 'http://localhost:51493/api/values';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any[]> {
      return this.http.get<string[]>(this.apiURl).pipe(
        catchError(this.handleError<string[]>('getHeroes', []))
      );
    }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
  }
}
