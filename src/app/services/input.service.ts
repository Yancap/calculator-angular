import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private _input!: string;
  private _onScreen!: string;
  private _result!: number;
  private _controlPoint!: boolean;
  private _pressEqual!: boolean;

  public setInput(action: (value: string) => string){
    this._input = action(this._input);
  }
  public setOnScreen(action: (value: string) => string){
    this._onScreen = action(this._onScreen);
  }
  public setResult(action: (value: number | undefined) => number){
    this._result = action(this._result);
  }
  public setControlPoint(action: (value: boolean) => boolean){
    this._controlPoint = action(this._controlPoint);
  }
  public setPressEqual(action: (value: boolean) => boolean){
    this._pressEqual = action(this._pressEqual);
  }

  getResult() {
    const inputCleaned = this._input.replace(/[^*+\-\/()%.,\d]/g, '');

    this.setResult(result => {
      try {
        return eval(inputCleaned);
      } catch (e) {
        return result;
      }
    });
    
  }
}
