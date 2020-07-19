// Object is one of kind of data types in JS
// In JS, Nearly all objects in JavaScript are instances of `Object`

/* Object Creation - 3 ways */

//1. Object Constructor
let obj = new Object()
obj.foo = 42
console.log(o)          // Object { foo: 42 }

let obj = new Object(null) // To create empty object

//2. Creation by object initializer
const object1 = {a: 'foo', b: 42, c: {}};
const c = {};

//3. By Object.create() method
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = "Matthew";      // "name" is a property set on "me", but not on "person"
  me.isHuman = true;        // inherited properties can be overwritten
  
  me.printIntroduction();   // expected output: "My name is Matthew. Am I human? true"

