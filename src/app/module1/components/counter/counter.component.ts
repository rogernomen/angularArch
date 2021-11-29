import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CounterComponentService } from "./services/counter-component.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterComponentService]
})

export class CounterComponent implements OnInit {
  counterValue$: Observable<number> | undefined;

  constructor(private readonly counterComponentService: CounterComponentService) {}

  ngOnInit() {
    this.counterValue$ = this.counterComponentService.getCounterValue();
  }

  increaseCounter(): void {
    this.counterComponentService.increaseCounterValue();
  }

  decreaseCounter(): void {
    this.counterComponentService.decreaseCounterValue();
  }
}
