import { Component, OnInit } from '@angular/core';
import { DbCreditsService, PaysWithCreditsData } from '../services/db-credits.service';
import { CreditService } from '../services/credit.service';

@Component({
  selector: 'app-savings-credits',
  templateUrl: './savings-credits.component.html',
  styleUrls: ['./savings-credits.component.scss']
})
export class SavingsCreditsComponent implements OnInit {


  constructor(private _DbCreditsService: DbCreditsService,
              private _creditService: CreditService) {}

  credits: PaysWithCreditsData[] =[]
  done = false;

  sortedCredits = [];
  newPayments = [];
  getPaysOfCredits(){
    this._DbCreditsService.getPaysOfCredits().subscribe((result: PaysWithCreditsData[])=>{
      this.credits = result;
      this.done = true;
    });
  }

  recalculate(newPay){
    let selectedCredits = this.credits.filter(credit => credit.checked);
    this.sortedCredits = this.sortSelectedCredits(selectedCredits);
    if(newPay != undefined) {
      let pay = parseInt(newPay);
      let sum = 0;
      for(let i = 0; i < this.sortedCredits.length; i++) {
        sum += this.sortedCredits[i].pay;
      }
      let overPay = pay - sum;
      let modifiedDate;
      for(let i = 0; i < this.sortedCredits.length; i++) {
        if(modifiedDate == undefined) {
        let date = this.sortedCredits[i].dateStarting.split('-'),
        year = parseInt(date[0]),
        month = parseInt(date[1]),
        day = parseInt(date[2]);
        modifiedDate = new Date(year,month-1,day);
        } else {
          let date = this.sortedCredits[i].dateStarting.split('-'),
          day = parseInt(date[2]);
          modifiedDate = new Date(this.sortedCredits[i-1].payments[1].getFullYear(), this.sortedCredits[i-1].payments[1].getMonth(), day);
        }
        overPay = pay - sum;
        this.sortedCredits[i].payments =  this._creditService.calculateNewCredit(this.sortedCredits[i], modifiedDate, overPay);

        sum -= this.sortedCredits[i].pay;
    }
  }
    return console.log(this.sortedCredits);
  }

  sortSelectedCredits(selectedCredits) {
    let sortedCredits = selectedCredits.sort((n1, n2) =>{
     if(n1.percent < n2.percent){
      return 1;
      }
     if(n1.percent > n2.percent){
      return -1;
      }
     return 0;
    });
    return sortedCredits;
  }


  clearAll(){
    this.sortedCredits = [];
  }

  ngOnInit() {
    this.getPaysOfCredits();
  }

}
