import { Component } from "@angular/core";
import { ResetCounterService } from "./services/reset-counter.service";

@Component({
  selector: 'app-reset-counter',
  templateUrl: './reset-counter.component.html',
  styleUrls: ['./reset-counter.component.scss'],
  providers: [ResetCounterService]
})

export class ResetCounterComponent {
  constructor(private readonly resetCounterService: ResetCounterService) {}

  resetCounter(): void {
    this.resetCounterService.resetCounterValue();
  }
}
