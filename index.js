// Chapter 1 - Q1
let a = "Harry"
let b = 6
console.log(a + b) // Harry6

// Chapter 1 - Q2
console.log(typeof (a+b)) // string

// Chapter 1 - Q3
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45 // Error: Assignment to constant variable
// a1 = {}
 
// Chapter 1 - Q4
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1) // { name: 'Lovish', section: 1, isPrincipal: false, friend: 'Shubham' }
// even though a1 is constant 
// a1 is a reference to the object inside brackets
// we cannot store number or string or anything in a1
// we cannot create a new object and store it to a1
// if object gets changed then it doesn't matter for a1 // a1 has made a relation with this object

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict.yakka)
console.log(dict['yakka']) 