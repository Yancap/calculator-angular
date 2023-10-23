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
    this.pressEqual = InputContextService.pressEqual;
    if(this.onScreen.length > 12 && this.onScreen.length < 20) {
      document.documentElement.style.setProperty('--font-size-eq', '28px')
    } else if(this.onScreen.length > 20) {
      document.documentElement.style.setProperty('--font-size-eq', '20px')
      document.documentElement.style.setProperty('--font-size-result', '16px')
    }
  }
}
