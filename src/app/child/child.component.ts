import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentValue:string;
  @Output() callParentFunction = new EventEmitter();
  parentVal:string
  counterForParentFuncCall:number = 0;
  childCalledCounter:number = 0;
  constructor() { }

  ngOnInit() {
    this.parentVal = this.parentValue;
  }
  callParentFun() {
    this.callParentFunction.emit(++this.counterForParentFuncCall);
  }
  childFunction(childCalledCounter) {
    this.childCalledCounter = childCalledCounter;
  }
}
