import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {


  constructor() { }

  calculateCredit(amountCredit: number, timeCredit: number, percentCredit: number, startingDate: Date ){
    let pay = Math.round(100*(amountCredit * (percentCredit / 1200 + (percentCredit / 1200) / ((Math.pow((1 + percentCredit / 1200),timeCredit)) - 1))))/100;
    let creditMas: CreditData[] = [],
       dateOfPay = startingDate,
      debtOfCredit = amountCredit,
      mainDebt, amountOfPercent,numOfPay,
      previousDate = new Date(startingDate);

    for(let i = 1; i<=timeCredit; i++){
    numOfPay = i;
    dateOfPay = this.plusOneMounth(startingDate, i);
    amountOfPercent = (debtOfCredit * (percentCredit/100)/365)*this.daysBetweenDates(previousDate, dateOfPay);
    mainDebt = pay - amountOfPercent;
    debtOfCredit = debtOfCredit - mainDebt;

    if(debtOfCredit < 0){
      pay = pay + debtOfCredit;
      mainDebt = pay - amountOfPercent;
      debtOfCredit = 0;
    }

    previousDate = new Date(dateOfPay);
    creditMas.push(<CreditData>{numOfPay: numOfPay, pay: pay, amountOfPercent: amountOfPercent, mainDebt: mainDebt, debtOfCredit: debtOfCredit, dateOfPay: dateOfPay});
    }
    return creditMas;

  }

   daysBetweenDates (leftDate, rightDate) {
    return Math.round((new Date(rightDate).getTime() - new Date(leftDate).getTime())/1000/60/60/24);
  }

  plusOneMounth(currentPaymentsDate: Date, time: number){
    let dateOfNextMonth = new Date(currentPaymentsDate);
    dateOfNextMonth.setMonth(dateOfNextMonth.getMonth() + time);
    if(currentPaymentsDate.getDate() != dateOfNextMonth.getDate()){
      let modifiedDate = new Date(currentPaymentsDate);
      modifiedDate.setMonth(modifiedDate.getMonth() + time);
      modifiedDate.setDate(1);
      return modifiedDate;
    }
    return dateOfNextMonth;
  }


}
export class CreditData{
  public numOfPay: number;
  public pay: number;
  public amountOfPercent: number;
  public mainDebt: number;
  public debtOfCredit: number;
  public dateOfPay: Date;
}
