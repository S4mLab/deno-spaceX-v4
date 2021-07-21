/*
We do not mark nethod as private over any type security concern 

the only reason for this is to restric the methods that dev can call 
the reason for this is may be we have method that is deeply manipulate the class or there is some really special complicated way to use it 

if there is a method that you just don't want other dev to call because it's very likely they gonna break something, we will mark it as private
*/

/*
protected: this method can be called by other methods in this class, or by other methods in child class
*/

class Vehicle {
  constructor(private color: string) {}

  printColor(): void {
    console.log(`color of the vehicle: ${this.color}`);
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
vehicle.printColor();

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startEngine(): void {
    this.drive();
  }

  alertPeple(): void {
    this.honk();
  }
}

const car = new Car('green');
car.startEngine();
car.alertPeple();
car.printColor();
