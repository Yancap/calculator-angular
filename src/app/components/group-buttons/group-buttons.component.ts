import { Component } from '@angular/core';
import { HandlerInputService } from './../../services/handler-input.service';

@Component({
  selector: 'group-buttons',
  templateUrl: './group-buttons.component.html',
  styleUrls: ['./group-buttons.component.scss']
})
export class GroupButtonsComponent {

  public handleBackspace!: () => void;
  public handleAddValue!:  (value: string) => void;
  public handleClean!: () => void;
  public handleEqual!: (value: string) => void;
  public handleInput!: (state: string, value: string) => string;
  constructor(
    public readonly handlerInputService: HandlerInputService
  ) {
    const {
      handleBackspace,
      handleAddValue,
      handleClean,
      handleEqual,
      handleInput
    } = handlerInputService;

    this.handleBackspace = handleBackspace;
    this.handleAddValue = handleAddValue;
    this.handleClean = handleClean;
    this.handleEqual = handleEqual;
    this.handleInput = handleInput;
  }

  handler() {
    this.handlerInputService.handleBackspace();
  }
}
