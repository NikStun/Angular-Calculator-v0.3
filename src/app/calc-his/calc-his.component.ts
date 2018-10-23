import { Component, OnInit } from '@angular/core';
import { ExecExp2Event } from '../calc/calc/calc.component';

@Component({
  selector: 'app-calc-his',
  templateUrl: './calc-his.component.html',
  styleUrls: ['./calc-his.component.scss']
})
export class CalcHisComponent implements OnInit {
  private historyItems: ExecExp2Event[] = [];

  public addToHistory(item: ExecExp2Event) {
    this.historyItems.push(item);
  }
  ngOnInit() {
  }

}
