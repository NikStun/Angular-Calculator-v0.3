import { Component, OnInit } from '@angular/core';
import { GetCreditsService, CreditData } from '../../services/get-credits.service';



@Component({
  selector: 'app-db-credits',
  templateUrl: './db-credits.component.html',
  styleUrls: ['./db-credits.component.scss']
})
export class DBCreditsComponent implements OnInit {

  constructor(private _getCreditsService: GetCreditsService) { }



  credits : CreditData[] = [];
  done = false;

  getCredits(){
    this._getCreditsService.getCredits()
    .subscribe((result: CreditData[])=>{this.credits = result; this.done = true;});
  }

  ngOnInit() {
    this.getCredits();

  }

}
