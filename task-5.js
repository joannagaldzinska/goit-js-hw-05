class Car {
         
    // Write code under this line
     static getSpecs(car) {
         return `maxSpeed: ${car._maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
     }
     
     constructor(obj) {
         this._maxSpeed = obj.maxSpeed;
         this.speed = 0;
         this.isOn = false;
         this.distance = 0;
         this._price = obj.price;

     }

     get price() {
         return this._price;
     }

     set price(value) {
         this._price = value;
     }

     turnOn(isOn) {
         this.isOn = true;
     }
     turnOff(isOn) {
         this.isOn = false
     }
     accelerate(value) {
         if (value > 0) return this.speed 
     }
     decelerate(value) {}
     drive(hours) {}
   }
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });

   mustang.turnOn();
    mustang.accelerate(50);
   mustang.drive(2);
console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
   
console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
 console.log(mustang.price); // 2000
 mustang.price = 4000;
console.log(mustang.price); // 4000
   