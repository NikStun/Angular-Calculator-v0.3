import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDatePickerConfig } from 'ng2-date-picker';

@Component({
  selector: 'app-credit-calc',
  templateUrl: './credit-calc.component.html',
  styleUrls: ['./credit-calc.component.scss']
})
export class CreditCalcComponent implements OnInit {
  creditForm: FormGroup;
  config: IDatePickerConfig = {
    format: 'DD.MM.YYYY',
    disableKeypress: true,
    showMultipleYearsNavigation: true,
    enableMonthSelector: true
  };
  constructor() {
    this.creditForm = new FormGroup({
      amountOfCredit: new FormControl(0, [Validators.required, Validators.min(0)]),
      timeOfCredit: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(360)]),
      percentOfCredit: new FormControl(10, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$')]),
      startingDate: new FormControl(null, Validators.required)
    });
   }
   clearForm(creditForm: FormGroup){
    this.creditForm.reset();
   }
  ngOnInit() {
  }

}
