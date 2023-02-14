interface MyInterface {
  myNumber:number
  myFunc: (myParam: number) => string 
}

class MyClass implements MyInterface {
  constructor(public myNumber:number) {}
  public myFunc = (myParam: number):string => `${this.myNumber + myParam}`
}

const myObject = new MyClass(10)
console.log(myObject.myFunc(10))
