import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcModule } from './calc/calc.module';
import { CalcHisComponent } from './calc-his/calc-his.component';
import { LocalStorageService } from './services/local-storage.service';

import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { CurrencyService } from './services/currency.service';





@NgModule({
  declarations: [
    AppComponent,
    CalcHisComponent,
  ],
  imports: [
    BrowserModule,
    CalcModule,
    HttpClientModule
  ],
  providers: [LocalStorageService, ExchangeRatesService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
