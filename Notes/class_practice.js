// What is class and how do we use it? Well let's disect a fuction


// const sayHello =  (name) =>{
//     ` Hello from ${name}`
// }
// class = human {
//     constructor ([argument]){
//     [property1]
//     [property2]
//     }
// }

// Class equals human and we are going to return a constructor that takes in
// an argument and a function

// Whatever argument the constructor takes in is a requirement to build the new
// object, and the argument will be used to build the new object

class  Human {
    constructor (name, height){
// class is simply a template
// Our class (called human) has taken is name and height as arguments therefore it will assign
// and create properties
        this.myName = name;
        this.myHeight = height;
// The JavaScript "this" keyword refers to the object it belongs to.
// In a method, "this" refers to the owner object.
// this.myName belongs to name. this.myHeight belongs to height
    }
// Thusfar, we know that we are creating an object with two properties. myName 
// and myHeight are the two properties created.

// myName and myHeight will be whatever we pass in to the constructor's arguments
    greeting(){
        return (`hello my name is, ${this.myname}`)
    }
// greeting is a method
}

const humanOne = new Human ( "Dwaylan", "5'6")
//  by creating this function we have now created a new object that satifies the
// constructor requirements and now has the myName and myHeight properties
console.log(humanOne)
//  I am logging human one in my terminal
const humanTwo = new Human ("Mark", "6,0")
//  I know have humanTwo which satifies the same requirements as human one 