import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcModule } from './calc/calc.module';
import { CalcHisComponent } from './calc-his/calc-his.component';

import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { CurrencyService } from './services/currency.service';
import { CreditService } from './services/credit.service';
import { CalcConverterComponent } from './calc-converter/calc-converter.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {NgxMaskModule} from 'ngx-mask'
import {DpDatePickerModule} from 'ng2-date-picker';
import { CreditCalcComponent } from './credit-calc/credit-calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CalcContainerComponent } from './calc-container/calc-container.component';


const appRoutes: Routes = [
  {path:'', redirectTo: 'calc', pathMatch: 'full'},
  {path: 'calc', component: CalcContainerComponent},
  {path: 'credit', component: CreditCalcComponent},
  {path: '**', component: PageNotFoundComponent}
  ];



@NgModule({
  declarations: [
    AppComponent,
    CalcHisComponent,
    CalcConverterComponent,
    CreditCalcComponent,
    PageNotFoundComponent,
    CalcContainerComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CalcModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
  ],
  providers: [LocalStorageService, ExchangeRatesService, CurrencyService, CreditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
