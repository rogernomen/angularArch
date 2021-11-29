import { CounterStateService } from './../../../services/counter-state.service';
import { Injectable } from "@angular/core";

@Injectable()
export class ResetCounterService {

  constructor(private counterStateService: CounterStateService) {}

  resetCounterValue(): void {
    this.counterStateService.resetCounterValue();
  }
}
