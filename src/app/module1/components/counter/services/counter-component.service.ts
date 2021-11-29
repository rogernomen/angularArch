import { CounterService } from './../../../services/counter.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class CounterComponentService {

  constructor(private readonly counterService: CounterService) {}

  getCounterValue(): Observable<number> {
    return this.counterService.getCounter();
  }

  increaseCounterValue(): void {
    this.counterService.increaseCounterValue();
  }

  decreaseCounterValue(): void {
    this.counterService.decreaseCounterValue();
  }
}
