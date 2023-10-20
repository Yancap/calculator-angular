import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public value!: string;
  @Input() public type!: string;
  @Input() public action!: (value: string) => void;

  public icons = {
    clean: '',
    division: '',
    equal: '',
    minus: '',
    mod: '',
    parentheses: '',
    plus: '',
    multiply: '',
    backspace: ''
  };
}
