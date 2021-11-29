import { CounterStateService } from './counter-state.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class CounterService {

  constructor(private readonly counterStateService: CounterStateService) {}

  getCounter(): Observable<number> {
    return this.counterStateService.getCounter();
  }

  increaseCounterValue(): void {
    this.counterStateService.increaseCounterValue();
  }

  decreaseCounterValue(): void {
    this.counterStateService.decreaseCounterValue();
  }

  resetCounterValue(): void {
    this.counterStateService.resetCounterValue();
  }
}
