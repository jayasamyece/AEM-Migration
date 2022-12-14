import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor(private _http: HttpClient) { }

  getCreditCards(): Observable<any>{
    return this._http.get(environment.creditCardEndPoint).pipe(
      tap(t=>{console.log('API Data-Main content',t )})
    );
  }
  getCreditCardContent(url: string): Observable<any>{
    return this._http.get(url).pipe(
      tap(t=>{console.log('API Data-content2',t )})
    );
  }
}
