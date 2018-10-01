import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-window',
  templateUrl: './output-window.component.html',
  styleUrls: ['./output-window.component.scss']
})
export class OutputWindowComponent implements OnInit {

  @Input()public expressionValue: string;

  ngOnInit() {
  }

}
