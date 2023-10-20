import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { GroupButtonsComponent } from './components/group-buttons/group-buttons.component';
import { ResultViewComponent } from './components/result-view/result-view.component';
import { ButtonComponent } from './components/group-buttons/button/button.component';
import { InputContextService } from './services/input-context.service';
import { HandlerInputService } from './services/handler-input.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    GroupButtonsComponent,
    ResultViewComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InputContextService, HandlerInputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
