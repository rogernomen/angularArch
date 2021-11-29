import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ComponentModule1Service } from "./services/component-module1.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [ComponentModule1Service]
})

export class CounterComponent implements OnInit {
  counterValue$: Observable<number> | undefined;

  constructor(private readonly componentModule1Service: ComponentModule1Service) {}

  ngOnInit() {
    this.counterValue$ = this.componentModule1Service.getCounterValue();
  }

  increaseCounter(): void {
    this.componentModule1Service.increaseCounterValue();
  }

  decreaseCounter(): void {
    this.componentModule1Service.decreaseCounterValue();
  }
}
