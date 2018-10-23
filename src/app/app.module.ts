import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcModule } from './calc/calc.module';
import { CalcHisComponent } from './calc-his/calc-his.component';



@NgModule({
  declarations: [
    AppComponent,
    CalcHisComponent,
  ],
  imports: [
    BrowserModule,
    CalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
