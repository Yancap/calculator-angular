import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupButtonsComponent } from './group-buttons.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    GroupButtonsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupButtonsComponent
  ]
})
export class GroupButtonsModule { }
