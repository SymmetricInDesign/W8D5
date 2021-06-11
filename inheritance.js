


Function.prototype.inherits = function(superClass){
    function Surrogate () {}
    Surrogate.prototype = superClass.prototype
    console.log(Surrogate.prototype)
    this.prototype = new Surrogate
    this.prototype.constructor = this
}

// class Cat extends Animal {
//     constructor(){
//         super()
//     }
// }

function Animal (name) {
    this.name = name;
    this.legs = 4
  };
  
  Animal.prototype.eat = function () {
    console.log(this.name + ' is eating.');
  };
  
  function Cat(name) {
    this.name = name;
    // super.legs()
    // this.legs = this.legs
  }

//   function Dog(name){

//   }
  
  Cat.inherits(Animal)
  
  Cat.prototype.meow = function () {
    console.log('Meow!');
  };
  
  
  const garfield = new Cat('Garfield');
  garfield.eat();
  garfield.meow();
//   garfield.legs = 3
  console.log(garfield.legs)

  const arfield = new Cat('arfield');
  arfield.eat();
  arfield.meow();
  console.log(arfield.legs)
  
  const noCat = new Animal('noCat');
  noCat.eat();
//   console.log(Animal())
//   noCat.meow();