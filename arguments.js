
// function sum(...args){
//     let sum=0
//     args.forEach((arg)=>{
//         sum+=arg
//     })
//     return sum
// }

function sum(){
    let sum=0
    // for(let i=0; i<arguments.length; i++){
    //     sum += arguments[i]
    // }
    for (let arg of arguments){
        sum+=arg
    }
    return sum
}

// console.log(sum(1,2,3,4,5))
Function.prototype.myBind = function(){
    // this(arguments)
    let args = []
    for(i=0; i<arguments.length; i++){
        args.push(arguments[i]);
    }   
    let that = this;
    return function() {
        let new_args = args.slice(1);
        for(i=0; i<arguments.length; i++){
            new_args.push(arguments[i]);
        }  

        that.apply(args[0], new_args);
    }
}
class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // const markov = new Cat("Markov");
  // const pavlov = new Dog("Pavlov");
  
  // markov.says("meow", "Ned");
  // // Markov says meow to Ned!
  // // true
  
  // // bind time args are "meow" and "Kush", no call time args
  // markov.says.myBind(pavlov, "meow", "Kush")();
  // // Pavlov says meow to Kush!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "a tree"
  // markov.says.myBind(pavlov)("meow", "a tree");
  // // Pavlov says meow to a tree!
  // // true
  
  // // bind time arg is "meow", call time arg is "Markov"
  // markov.says.myBind(pavlov, "meow")("Markov");
  // // Pavlov says meow to Markov!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "me"
  // const notMarkovSays = markov.says.myBind(pavlov);
  // notMarkovSays("meow", "me");
  // // Pavlov says meow to me!
  // // true

function curriedSum(numArgs){
  let numbers = [];

  return function _curriedSum(num){
    numbers.push(num);

    if(numbers.length === numArgs){
      return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }else{
      return _curriedSum;
    }
  }
}

// const sum = curriedSum(4);

// const sumkappa = curriedSum(3);

// console.log(sum(5)(30)(20)(1)); // => 56
// console.log(sumkappa(5)(30)(20)); // => 55

Function.prototype.curry = function(numArgs){
  let args = [];
  let that = this;

  return function _curry(arg){
    args.push(arg);

    if(args.length == numArgs){
      // return that.apply(that, args);
      return that.call(that, ...args);
    }else{
      return _curry;
    }
  }
}

console.log(sum.curry(4)(1)(3)(5)(7))