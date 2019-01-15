import { Component, ViewChild } from '@angular/core';
import { CalcHisComponent } from './calc-his/calc-his.component';
import { ExecExp2Event } from './calc/calc/calc.component';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _localStorageService: LocalStorageService){}
  @ViewChild("history") public history: CalcHisComponent;
  title = 'democalc';
  public onExpSend(item: ExecExp2Event){
    this._localStorageService.addToHistory(item);
  }
}
