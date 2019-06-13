import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  arr1 = [1,2,3]
  obj1 = {"K1":"V1","K2":{"k3":"V3","K4":{"K5":"V5"}}};
  //Closure Example Starts
  addFunc(num1) {
    var addTo = function(num2) {
      return num1 + num2;
    }
    return addTo;
  }
  callClosure() {
    var addFive = this.addFunc(5); //now 5 is a closure it will be stored within the function returned
    var addTwo = this.addFunc(2); //now 2 is a closure it will be stored within the function returned
    console.log(addFive(7)); //7 is added to closure 5 returns 12
    console.log(addTwo(7)); //7 is added to closure 2 returns 9
  }
  //Closure Example Ends
  //Function Prototype Example Starts
  protoFunc = function(i) {
    this.i = i;
    this.j = i*2;
  }
  //Function Prototype Example Ends
  // Promise Example Start
  promiseToDoSomething = new Promise(function(resolve, reject) {
    //Operations
    let isDone = Math.floor(Math.random() * 2); // Random True or False
    if (isDone) {
      resolve('Done'); //Resolve a promise
    } else {
      reject('not Done'); // reject the promise
    }
  });
  // Promise Example End

  constructor() {
    this.callClosure();
    let xArr = [1,2,3]
    //Function Prototype Example Starts
    this.protoFunc.prototype.getJ = function() {
      return this.j;
    }
    var protoFun = new this.protoFunc(2);
    console.log(protoFun.getJ())
    //
    Array.prototype.printMe = () => {
      console.log("IN PRINT");
      console.log(this);
      // this.forEach(elem => {
      //   console.log(elem);
      // })
    }
    console.log("xArr.print")
    xArr.printMe();
    //Function Prototype Example Ends

    //Copy Objects Example Starts
    let arrConst = [...this.arr1] // Copies Value of array
    let objConst = {...this.obj1} // Copies Value of object
    let objToArrat = {...this.arr1} // Copies Value of object
    let objCopy = this.obj1 // Copies instance of object (If one changes other also changes)
    Object.seal(this.obj1); // Can't add new properties but can modify existing ones
    this.obj1.K1 = "VAL1"
    Object.freeze(this.obj1); // Can't add new properties and can't modify existing ones
    //Copy Objects Example Ends
    //Promise Example Starts
    this.promiseToDoSomething.then(function(fromResolve) {
      console.log('the work is ' + fromResolve);
    }).catch(function(fromReject){
    	console.log('the work is ' + fromReject);
    });
    //Promise Example Ends
  }
  ngOnInit() {
  }

}
