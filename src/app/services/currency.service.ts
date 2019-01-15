import { Injectable } from '@angular/core';
import { ExchangeRatesService } from './exchange-rates.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _ExchangeRates: ExchangeRatesService) { }

  public rates: number[];
 /* public loadCurrencies(){
   this._ExchangeRates.getAll().subscribe((rates: number[]) =>
   {}
    this.rates.push(result.Valute['USD'].Value);
    this.rates.push(result.Valute['EUR'].Value);
    this.rates.push(result.Valute['UAH'].Value);
    this.rates.push(result.Valute['GBP'].Value);
    });
  }
  */
}
