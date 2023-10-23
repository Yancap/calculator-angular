import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'

})
export class InputContextService {

  public static input: string = "";
  public static onScreen: string = "";
  public static result: number = 0;
  public static controlPoint: boolean = true;
  public static pressEqual: boolean = false;

  public static setInput(action: string): void;
  public static setInput(action: (value: string) => string): void;
  public static setInput(action: unknown){
    
    if(typeof action === "function"){
      InputContextService.input = action(InputContextService.input);
      
    } else if(typeof action === "string") {
      InputContextService.input = action;
    }
  }
  
  public static setOnScreen(action: string): void;
  public static setOnScreen(action: (value: string) => string): void;
  public static setOnScreen(action: unknown){
    
    if(typeof action === "function"){
      InputContextService.onScreen = action(InputContextService.onScreen);
    } else if(typeof action === "string") {
      InputContextService.onScreen = action;
    }
  }
  
  public static setResult(action: number): void;
  public static setResult(action: (value: number | undefined) => number ): void;
  public static setResult(action: unknown){
    if(typeof action === "function"){
      InputContextService.result = action(InputContextService.result);
    } else if(typeof action === "number"){
      InputContextService.result = action;
    }
    
  }

  public static setControlPoint(action: boolean): void;
  public static setControlPoint(action: (value: boolean) => boolean): void;
  public static setControlPoint(action: unknown){
    if(typeof action === "function") {
      InputContextService.controlPoint = action(InputContextService.controlPoint);
    } else if(typeof action === "boolean") {
      InputContextService.controlPoint = action;
    }
    
  }

  public static setPressEqual(action: boolean): void;
  public static setPressEqual(action: (value: boolean) => boolean): void;
  public static setPressEqual(action: unknown){
    
    if(typeof action === "function") {
      InputContextService.pressEqual = action(InputContextService.pressEqual);
    } else if(typeof action === "boolean") {
      InputContextService.pressEqual = action;
    }
  }


  public static getResult() {
    const inputCleaned = InputContextService.input.replace(/[^*+\-\/()%.,\d]/g, '');

    InputContextService.setResult(result => {
      try {
        return eval(inputCleaned);
      } catch (e) {
        return result;
      }
    });
    
  }
}

