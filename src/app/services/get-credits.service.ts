import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetCreditsService {

  constructor(private _http: HttpClient) { }

  getCredits(){
    return this._http.get('http://localhost:3000/api/credits');
  }

  getPayments(idCredit){

    let params = new HttpParams().set('id', idCredit);

    return this._http.get('http://localhost:3000/api/credit/payments', {params: params});
  }



}


export class CreditData{
  idCredit: number;
  idBank: number;
  amount: number;
  paymentPeriod: number;
  percent: number;
  dateStarting: Date;
}

export class PaymentsData{
  numOdPay: number;
  pay: number;
  mainDebt: number;
  amountOfPercent: number;
  debtOfCredit: number;
  dateOfPay: Date;
}
