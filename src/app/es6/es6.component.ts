import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {

  constructor() {
    this.checkForLoops();
  }
  checkForLoops() {
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
  ngOnInit() {
  }

}
