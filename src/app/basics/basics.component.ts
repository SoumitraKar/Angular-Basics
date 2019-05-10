import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  data ='Text From Variable';
  id = "text1";
  dataString = 'Text From Function';
  showthis = true;
  dontShowthis = false;
  showIf = true;
  items = ['item 1', 'item 2'];
  calledFromChildCtr:number = 0;
  childCalledCounter:number = 0;
  datum:number = 100;

  @ViewChild('childComponent') childRefference;
  //Angular Lifecycle Hook Starts
  constructor(private modalService: NgbModal) {
    console.log("constructor, datum = " + this.datum);
  }
  ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.datum}`);
  }
  ngOnInit() {
      console.log(`ngOnInit  - data is ${this.datum}`);
  }
  ngDoCheck() {
      console.log("ngDoCheck")
  }
  ngAfterContentInit() {
      console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
      console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
      console.log("ngOnDestroy");
  }
  //Angular Lifecycle Hook Ends
  fnAddNumber():void{
      this.datum+=100;
  }
  deleteNumber():void{
      this.datum -=10;
  }
  toggleIfElse() {
    this.showIf = !this.showIf;
  }
  textFromFunc() {
    return this.dataString;
  }
  onChangeOfTextBox(event: Event){ // or event: any
    this.data = (<HTMLInputElement>event.target).value //event.target.value if event is any
  }
  onclickBtn() {
    this.data = "Changes on click"
  }
  additems() {
    var item = "item " + Math.floor(Math.random()*10);
    this.items.push(item);
  }

  // Modal Code Start
  closeResult: string;

  parentFunction(event) {
    this.calledFromChildCtr = event;
  }
  callChildFunction() {
    this.childRefference.childFunction(++this.childCalledCounter)
  }
  // Modal Code Ends

}
