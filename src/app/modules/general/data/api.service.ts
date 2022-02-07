import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {SMA} from "./api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getSMA(): Observable<SMA> {
    return this.http.get<SMA>('http://localhost:4200/api/technicalData/sma', {
      headers: {
        'Connection': 'application/json'
      }
    })
  }

  getSMAByProps() {
    return this.http.get<SMA>('http://localhost:3000/api/technicalData/:params?symbol=UA&time_period=200&series_type=high&interval=60min')
  }
}
