import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class CounterRemote {
  constructor(private readonly httpClient: HttpClient) {}

  saveCounter(counterValue: number): Observable<any> {
    return this.httpClient.post('/postUrl', {counterValue});
  }
}
