import { Component, OnInit } from '@angular/core';
import { lables } from '../calc-button/calc-button.component';
import * as math from 'mathjs';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  expVal: string = '';


  ngOnInit() {
  }
  public onCalcBtnClick(event: lables){
      if(event.label == 'C'){
        this.expVal = '';
      } else if(event.label == '='){
      this.expVal = math.eval(this.expVal)
      }
      else{this.expVal = this.expVal + event.label;}
  }

}
