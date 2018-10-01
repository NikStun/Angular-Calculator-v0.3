import {EventEmitter, Output, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {

    @Input() nameBut: string;
    @Output() clickBut = new EventEmitter<lables>();
    public onClick (event){
      let arg = new lables();
      arg.label = this.nameBut;
      this.clickBut.emit(arg);
    }
  ngOnInit() {
  }

}
export class lables  {
  public label: string;

}
