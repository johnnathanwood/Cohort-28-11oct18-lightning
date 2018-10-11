// let me = {
//     first: "John", 
//     last: "Wood",
//     age: 25,
//     hair: "black",
//     personality: "ENFP",
//     fullName:() => `Hi, my name is ${me.first + me.last}`
//     }; 
//     console.log(fullName) 

// let love = {
//     first: "Jessica", 
//     last: "Brown",
//     age: 28,
//     hair: "red",
//     personality: "INFP",
//     fullName:() => `Hi, my name is ${love.fullName}`

// };

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
}
//   1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company's lawyer is ${employee.name}`)

//   2. Console log "Jeff was hired on 09/22/2010" using bracket notation.
console.log(`${employee.name.split(' ')[0]} was hired on ${employee["hire_date"]}`)


//   3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
let vd = "vacation_days"
employee[vd] = 20
console.log(vd)
console.log(employee)


// 4. Use the variable above to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation?
let eom = "Employee_of_the_month"
employee[eom] = false
console.log(employee)
console.log(`I have ${employee[vd]} days of vacation`)
console.log(employee[vd])
console.log(employee[eom])

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
}
//   1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company's lawyer is ${employee.name}`)

//   2. Console log "Jeff was hired on 09/22/2010" using bracket notation.
console.log(`${employee.name.split(' ')[0]} was hired on ${employee["hire_date"]}`)


//   3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
let vd = "vacation_days"
employee[vd] = 20
console.log(vd)
console.log(employee)


// 4. Use the variable above to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation?
let eom = "Employee_of_the_month"
employee[eom] = false
console.log(employee)
console.log(`I have ${employee[vd]} days of vacation`)
console.log(employee[vd])
console.log(employee[eom])

////////////////////////////////////////////////////////////////////////////////////////////////////////

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true
}

// 1. Add an action that the painter can perform.

painter.sellService = () => {
    return `Hi, I am a painter. I will paint your house for only $${painter.cost_per_hour} per hour!`
}
console.log(painter.sellService())

// 2. Have her take that action by executing the method you created.



// BONUS:
// Add a method that allows us to add new tools for the painter.

painter.addTool = (tool) => {
    painter.tools.push(tool)
}

painter.addTool = ("sprayer")

console.log(painter)

console.log(painter.tools)


// loops!

let tools = ["brush", "roller", "caulk", "sandpaper", "dropcloth"]
    // this runs once 
for(let i = 0; i < tools.length; i+= 2){
    // do something
    debugger;
    console.log("The painter used this:", tools[i]);
}
//  forEach is a method on an array
tools.forEach( (tool) => {
    console.log("The painter uses this: ",tool);
});

for (let i = 0, j = 5; i < tools.length; i++, j--) {
    console.log("The painter uses this: ", tools[i], "j is", j );
}
    console.log("The loop is done!")

    // find a way to output the string "I am a rockstar ninja unicorn JS dev" from this array
let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]
    // hyperbole.reverse ();
    // console.log(hyperbole)
    console.log(hyperbole.reverse().join(" "))









