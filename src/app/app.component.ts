import { Component, ViewChild } from '@angular/core';
import { CalcHisComponent } from './calc-his/calc-his.component';
import { ExecExp2Event } from './calc/calc/calc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("history") public history: CalcHisComponent;
  title = 'democalc';
  public onExpSend(eventArg: ExecExp2Event){
    this.history.addToHistory(eventArg);
  }
}
