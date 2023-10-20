import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputContextService {

  private static _input: string;
  private static _onScreen: string;
  private static _result: number;
  private static _controlPoint: boolean;
  private static _pressEqual: boolean;

  public static setInput(action: string): void;
  public static setInput(action: (value: string) => string): void;
  public static setInput(action: unknown){
    if(typeof action === "function"){
      this._input = action(this._input);
    } else if(typeof action === "string") {
      this._input = action;
    }
    
  }
  
  public static setOnScreen(action: string): void;
  public static setOnScreen(action: (value: string) => string): void;
  public static setOnScreen(action: unknown){
    if(typeof action === "function"){
      this._onScreen = action(this._onScreen);
    } else if(typeof action === "string") {
      this._onScreen = action;
    }
  }
  
  public static setResult(action: number): void;
  public static setResult(action: (value: number | undefined) => number ): void;
  public static setResult(action: unknown){
    if(typeof action === "function"){
      this._result = action(this._result);
    } else if(typeof action === "number"){
      this._result = action;
    }
    
  }

  public static setControlPoint(action: boolean): void;
  public static setControlPoint(action: (value: boolean) => boolean): void;
  public static setControlPoint(action: unknown){
    if(typeof action === "function") {
      this._controlPoint = action(this._controlPoint);
    } else if(typeof action === "boolean") {
      this._controlPoint = action;
    }
    
  }

  public static setPressEqual(action: boolean): void;
  public static setPressEqual(action: (value: boolean) => boolean): void;
  public static setPressEqual(action: unknown){
    
    if(typeof action === "function") {
      this._pressEqual = action(this._pressEqual);
    } else if(typeof action === "boolean") {
      this._pressEqual = action;
    }
  }

  public static get input(){
    return this._input;
  }
  public static get onScreen(){
    return this._onScreen;
  }
  public static get result(){
    return this._result;
  }
  public static get controlPoint(){
    return this._controlPoint;
  }
  public static get pressEqual(){
    return this._pressEqual;
  }

  public static getResult() {
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

