import { CounterStateService } from './../../../services/counter-state.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ComponentModule1Service {

  constructor(private readonly counterStateService: CounterStateService) {}

  getCounterValue(): Observable<number> {
    return this.counterStateService.getCounter();
  }

  increaseCounterValue(): void {
    this.counterStateService.increaseCounterValue();
  }

  decreaseCounterValue(): void {
    this.counterStateService.decreaseCounterValue();
  }
}
