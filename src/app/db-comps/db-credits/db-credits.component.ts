import { Component, OnInit } from '@angular/core';
import { DbCreditsService, CreditData } from '../../services/db-credits.service';



@Component({
  selector: 'app-db-credits',
  templateUrl: './db-credits.component.html',
  styleUrls: ['./db-credits.component.scss']
})
export class DBCreditsComponent implements OnInit {

  constructor(private _DbCreditsService: DbCreditsService) { }



  credits : CreditData[] = [];
  done = false;

  getCredits(){
    this._DbCreditsService.getCredits()
    .subscribe((result: CreditData[])=>{this.credits = result; this.done = true;});
  }

  deleteCredit(idCredit){
    this._DbCreditsService.deleteCredit(idCredit)
    .subscribe();
    this.getCredits();
  }
  ngOnInit() {
    this.getCredits();

  }

}
