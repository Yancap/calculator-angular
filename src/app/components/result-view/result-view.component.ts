import { Component, DoCheck } from '@angular/core';
import { InputContextService } from 'src/app/services/input-context.service';

@Component({
  selector: 'result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements DoCheck {
  public onScreen!: string;
  public result!: number | undefined;
  public getResult!: () => void;
  public input!: string;
  public pressEqual!: boolean;

  constructor(){
    const {onScreen, result, getResult, input, pressEqual} = InputContextService;
    this.onScreen = onScreen;
    this.result = result;
    this.getResult = getResult;
    this.pressEqual = pressEqual;
    this.input = input;
  }

  ngDoCheck() {
    this.getResult();
    this.onScreen = InputContextService.onScreen;
    this.result = InputContextService.result

  }
}
