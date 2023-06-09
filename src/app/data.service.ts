import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  getPords(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products').pipe(delay(3000));
  }
}
