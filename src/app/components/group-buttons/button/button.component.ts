import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public value!: string;
  @Input() public type!: string;
  @Input() public action!: (value: string) => void;
  
  public icons: {
  [key: string]: string;
  } = {
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

  public isContains!: boolean;

ngOnInit(): void {
  this.isContains = this.value in this.icons;
}
}
