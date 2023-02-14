interface Logger {
  log(param: string): void
}

interface Database {
  logger: Logger
  save(key: string, value: string): void
}

class ConsoleLogger implements Logger {
  public log(param:string): void {
    console.log(`ConsoleLogger1: ${param}`)
  }
}

class ConsoleLogger2 implements Logger {
  public log(param:string): void {
    console.log(`ConsoleLogger2: ${param}`)
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key:string, value: string):void {
    this.logger.log(`${key} ${value}`)
  }
}

const logger1 = new ConsoleLogger()
const logger2 = new ConsoleLogger2()

const exampleDatabase1 = new ExampleDatabase(logger1)
const exampleDatabase2 = new ExampleDatabase(logger2)
const exampleDatabase3 = new ExampleDatabase()

exampleDatabase1.save('key1', 'value1')
exampleDatabase2.save('key2', 'value2')
exampleDatabase3.save('key3', 'value3')