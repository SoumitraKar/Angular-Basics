import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {
  data ='Text From Variable';
  aNumber:number = 76.55
  id = "text1";
  dataString = 'Text From Function';
  showthis = true;
  dontShowthis = false;
  showIf = true;
  items = ['item 1', 'item 2'];
  calledFromChildCtr:number = 0;
  childCalledCounter:number = 0;
  dateVar:any = new Date()

  @ViewChild('childComponent') childRefference;

  constructor(private modalService: NgbModal) {
  console.log("constructor");
  }

  ngOnInit() {
  console.log("ngOnInit");
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
    let arr = [10, 2, 5, 3, 7, 4, 9, 8]
    //All bellow looops are exactly the same
    //For Each loop
    arr.forEach(function(ar){
      console.log(ar);
    });
    console.log("-----------------");
    // Arrow function
    arr.forEach((ar) => {
      console.log(ar)
    });
    console.log("-----------------");
    // Arrow function with only one argument and one line of code
    arr.forEach(ar => console.log(ar));
    console.log("-----------------");
    //for of
    for(let ar of arr) {
      console.log(ar)
    }
    console.log("-----------------");
    //for in
    for(let ar in arr) {
      console.log(arr[ar])
    }
  }
  additems() {
    var item = "item " + Math.floor(Math.random()*10);
    this.items.push(item);
  }

  // Modal Code Start
  closeResult: string;
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  parentFunction(event) {
    this.calledFromChildCtr = event;
  }
  callChildFunction() {
    this.childRefference.childFunction(++this.childCalledCounter)
  }
  // Modal Code Ends

}
