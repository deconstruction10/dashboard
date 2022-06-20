import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SMA, SMAProperties} from "./api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getSMA(symbol: string, interval: string, timePeriod: number, seriesType: string) {
    return this.http.get('api/technicalData/sma', {
      headers: {
        'Connection': 'application/json'
      }
    })
  }

  getSMAByProps(props: SMAProperties): Observable<Object> {
    return this.http.get(`/api/technicalData/:params?symbol=${props.symbol}&time_period=${props.timePeriod}&series_type=${props.seriesType}&interval=${props.interval}`);
  }
}
