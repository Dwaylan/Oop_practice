// What is encapsulation?
// Encapsulation is grouping variables and functions that operation on them into
// objects
// Example:

// We have 3 variables

let baseSalary = 30000;
let overTime = 10;
let rate = 20;

// we now have a ***procedural*** function that passes in our 3 variables as arguments
function getWage(baseSalary,overTime,rate){
    return baseSalary + (overTime * rate)
}

// translation: In order to get our wage  we take our base salary and add it to 
// the overtime times rate product

// Now lets try this in an object oriented manner:
let employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
//  We have now created an object with our three variables as keys 
getWage: function(){
    return this.baseSalary + (this.overTime + this.rate);
// *** note that this function did not take in any arguments. Object oriented
// functions dont take in parameters (to my knowledge) ***
}
}
