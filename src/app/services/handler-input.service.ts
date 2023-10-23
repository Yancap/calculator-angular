import { Injectable } from '@angular/core';
import { InputContextService } from './input-context.service';

@Injectable({
  providedIn: 'root'
})
export class HandlerInputService {
  private setInput: {
    (action: string): void;
    (action: (value: string) => string): void;
  };
  private setOnScreen!: {
    (action: string): void;
    (action: (value: string) => string): void;
  };
  private setPressEqual!: {
    (action: boolean): void;
    (action: (value: boolean) => boolean): void;
  };
  private setControlPoint!: {
    (action: boolean): void;
    (action: (value: boolean) => boolean): void;
  };
  private getResult!: () => void;

  constructor() { 
    const {
      setInput,
      setOnScreen,
      setControlPoint,
      getResult,
      setPressEqual
    } = InputContextService;

    this.setInput = setInput;
    this.setOnScreen = setOnScreen;
    this.setControlPoint = setControlPoint;
    this.getResult = getResult;
    this.setPressEqual = setPressEqual;
    
  }
  public handleClean = () => {
    this.setInput("");
    this.setOnScreen('');
    this.setControlPoint(true);
    this.setPressEqual(false)
  }
  public handleBackspace = () => {
    this.setInput(input => {
      if (input[input.length - 1] === '.') {
        this.setControlPoint(true);
        return input.substring(0, input.length - 1)
      }
      return input.substring(0, input.length - 1)
    });
    this.setOnScreen(onScreen => {
      if (onScreen[onScreen.length - 1] === '.') {
        this.setControlPoint(true);
        return onScreen.substring(0, onScreen.length - 1)
      }
      return onScreen.substring(0, onScreen.length - 1)
    });
  }
  public handleAddValue = (value: string) => {
    
    let valuesForInput =
      value === 'mod'
        ? '%'
        : value === 'division'
        ? '/'
        : value === 'multiply'
        ? '*'
        : value === 'minus'
        ? '-'
        : value === 'plus'
        ? '+'
        : value;

    let valuesForOnScreen =
      value === 'division' ? '÷' : value === 'multiply' ? 'x' : 
      value === '.' ? ',' : valuesForInput;
    this.setOnScreen(onScreen => this.handleInput(onScreen, valuesForOnScreen));
    this.setInput(input => this.handleInput(input, valuesForInput).replace(/[x]/g, '*'));
  }
  public handleEqual = () => {
    if(!isNaN(Number(InputContextService.input[InputContextService.input.length - 1]))) {
      this.setPressEqual(true);
      this.getResult();
    }
  }
  public handleInput = (state: string, value: string) => {
    if(InputContextService.pressEqual) {
      this.setPressEqual(false)
      state = String(InputContextService.result)
    }
    
    if (state === '') {
      if (!isNaN(Number(value))) return state + value;
      else if (value == '-') return state + value;
      return state;
    }

    if (!isNaN(Number(value))) {
      return state + value;
    } else {
      if (value === '.') {
        if (isNaN(Number(state[state.length - 1])) && InputContextService.controlPoint) {
          this.setControlPoint(false);
          return state + '0.';
        } else if (InputContextService.controlPoint) {
          this.setControlPoint(false);
          
          return state + value;
        }
      } else if (value === 'parentheses') {
        this.setControlPoint(true);
        if (!isNaN(Number(state[state.length - 1])) && !state.includes('(')){
          return state + 'x' + '(';
        }else if (!state.includes('(')){
          return state + '('
        }
        else {
          let quantityR = state.match(/[(]/g)?.length ?? 0 ; // (
          let quantityL = state.match(/[)]/g)?.length ?? 0; // )

          if (
            isNaN(Number(state[state.length - 1])) &&
            state[state.length - 1] !== '(' &&
            state[state.length - 1] !== ')'
          ) return state + '(' 
          else if (state[state.length - 1] === '(') return state + '(';
          else if (quantityR > quantityL) return state + ')';
          else if (state[state.length - 1] === ')') return state + 'x' + '(';
          else if (!isNaN(Number(state[state.length - 1]))) return state + 'x' + '(';
          else return state + '(';
        }
      } else {
        this.setControlPoint(true);
        if (!isNaN(Number(state[state.length - 1]))) return state + value;
        if (state[state.length - 1] === ')') return state + value;
        if (state[state.length - 1] === '(' && value === "-") return state + value;
      }
    }
    return state;
  }
}
