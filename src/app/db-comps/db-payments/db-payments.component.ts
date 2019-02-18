import { Component, OnInit } from '@angular/core';
import { DbCreditsService, PaymentsData } from '../../services/db-credits.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-db-payments',
  templateUrl: './db-payments.component.html',
  styleUrls: ['./db-payments.component.scss']
})
export class DbPaymentsComponent implements OnInit {

  constructor(private _DbCreditsService: DbCreditsService,
              private _activateRoute: ActivatedRoute) {
                this.subscription = _activateRoute.params.subscribe(params=>this.id=params['id']);
              }

  private subscription: Subscription;
  private id: number;
  payments: PaymentsData[] = [];
  done = false;

  getPayments(idCredit){
  this._DbCreditsService.getPayments(idCredit)
  .subscribe((result: PaymentsData[]) => {this.payments = result; this.done = true;});
  }
  ngOnInit() {
    this.getPayments(this.id);
  }

}
