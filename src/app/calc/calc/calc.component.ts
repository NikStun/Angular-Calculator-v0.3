import { EventEmitter, Output, Component, OnInit, Input } from '@angular/core';
import { lables, OperationCode } from '../calc-button/calc-button.component';
import * as math from 'mathjs';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  expVal: string = '';
  @Output() expSend = new EventEmitter<ExecExp2Event>();
  ngOnInit() {
  }
  public onCalcBtnClick(event: lables){
      if(event.operationCode == OperationCode.clear){
        this.expVal = '';
      } else if(event.operationCode == OperationCode.enter){
        let expRes = new ExecExp2Event();
        expRes.expression = this.expVal;
        this.expVal = math.eval(this.expVal) + '';
        expRes.result = this.expVal;
        this.expSend.emit(expRes);
        }
      else if(event.operationCode == OperationCode.backspace){
        if(this.expVal.length >0){
          if(this.expVal.length == 1){
          this.expVal = '';
          }
          else{
            this.expVal = this.expVal.slice(0,this.expVal.length - 1);
        }
      }
    }
      else{
        this.expVal = this.expVal + event.label;
      }
  }
}
export class ExecExp2Event{
  public expression: string;
  public result: string;
}
