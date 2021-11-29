import { Injectable } from "@angular/core";
import { CounterService } from 'src/app/module1/services/counter.service';

@Injectable()
export class ResetCounterService {

  constructor(private counterService: CounterService) {}

  resetCounterValue(): void {
    this.counterService.resetCounterValue();
  }
}
