class Superclass {
  constructor(
    public isSuper: boolean = true
  ) {}

  public sayHello():void {
    console.log('Hello World!')
  }
}

class Subclass extends Superclass {
  constructor(
    public isSuper: boolean = false
  ) {
    super()
  }
}

function myFunc(superclass: Superclass) {
  superclass.sayHello()

  if (superclass.isSuper) {
    console.log('true')
  } else {
    console.log('false')
  }
}

const superclass = new Superclass()
const subclass = new Subclass()

myFunc(superclass)
myFunc(subclass)

