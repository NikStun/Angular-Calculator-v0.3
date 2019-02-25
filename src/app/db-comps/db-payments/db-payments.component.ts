import { Component, OnInit, ViewChild } from '@angular/core';
import { DbCreditsService, PaymentsData, CreditData } from '../../services/db-credits.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {DatePickerDirective} from 'ng2-date-picker';
import { IDatePickerConfig } from 'ng2-date-picker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditService, BankData } from '../../services/credit.service';

@Component({
  selector: 'app-db-payments',
  templateUrl: './db-payments.component.html',
  styleUrls: ['./db-payments.component.scss']
})
export class DbPaymentsComponent implements OnInit {

  creditForm: FormGroup;
  @ViewChild('dateDirectivePicker') datePickerDirective: DatePickerDirective;
  config: IDatePickerConfig = {
    format: 'DD.MM.YYYY',
    disableKeypress: true,
    showMultipleYearsNavigation: true,
    enableMonthSelector: true
  };


  constructor(private _DbCreditsService: DbCreditsService,
              private _CreditService: CreditService,
              private _activateRoute: ActivatedRoute) {
                this.creditForm = new FormGroup({
                  amountOfCredit: new FormControl(0, [Validators.required, Validators.min(0)]),
                  timeOfCredit: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(360)]),
                  percentOfCredit: new FormControl(10, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$')]),
                  startingDate: new FormControl(null, Validators.required),
                  bankId: new FormControl(Validators.required)
                });

                this.subscription = _activateRoute.params.subscribe(params=>this.id=params['id']);
              }

  private subscription: Subscription;
  private id: number;
  payments: PaymentsData[] = [];
  credit = new CreditData();
  donePayments = false;
  doneCredit = false
  bankMas: BankData[] = [];

  getPayments(idCredit){
  this._DbCreditsService.getPayments(idCredit)
  .subscribe((result: PaymentsData[]) => {this.payments = result; this.donePayments = true;});
  }

  getBanks(){
    this._CreditService.getBank().subscribe((result: BankData[])=>
    {this.bankMas = result;})
  }

  getOneCredit(idCredit){
    this._DbCreditsService.getOneCredit(idCredit)
    .subscribe((result: CreditData)=>{
      this.credit = result;
      this.doneCredit = true;
      let modCredit = {
      amountOfCredit: this.credit.amount,
      timeOfCredit: this.credit.paymentPeriod,
      percentOfCredit: this.credit.percent,
      startingDate: this.credit.dateStarting.slice(0, 10),
      bankId: this.credit.idBank
    }
    this.creditForm.reset(modCredit);});
  }

  ngOnInit() {
    this.getPayments(this.id);
    this.getOneCredit(this.id);
    this.getBanks();
  }

}
