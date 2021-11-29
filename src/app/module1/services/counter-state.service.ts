import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class CounterStateService {
  private counterValue = 0;
  private counter = new BehaviorSubject<number>(this.counterValue);

  getCounter(): Observable<number> {
    return this.counter.asObservable();
  }

  increaseCounterValue(): void {
    this.counterValue++;
    this.updateCounter(this.counterValue);
  }

  decreaseCounterValue(): void {
    this.counterValue--;
    this.updateCounter(this.counterValue);
  }

  resetCounterValue(): void {
    this.counterValue = 0;
    this.updateCounter(this.counterValue);
  }

  private updateCounter(value: number): void {
    this.counter.next(value);
  }
}
