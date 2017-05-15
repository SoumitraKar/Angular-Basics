import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  //alert("constructor");
  }

  ngOnInit() {
  //alert("ngOnInit");
  }
  data ='Text From Variable';
  id = "text1";
  dataString = 'Text From Function';
  showthis = true;
  dontShowthis = false;
  showIf = true;
  items = ['item 1', 'item 2'];
  
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
    console.log(this.items)
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
  // Modal Code Ends

}
