import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './material/input-text/input-text.component';
import { InputPasswordComponent } from './material/input-password/input-password.component';
import { ButtonComponent } from './material/button/button.component';
import { InputTextAreaComponent } from './material/input-text-area/input-text-area.component';
import { RadioButtonComponent } from './material/radio-button/radio-button.component';
import { CheckBoxComponent } from './material/check-box/check-box.component';


import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputPasswordComponent,
    ButtonComponent,
    InputTextAreaComponent,
    RadioButtonComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
