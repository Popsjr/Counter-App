// document.getElementById("count-el").innerText = 5

// let count = 1

// console.log(count)

// create a variable your, myAge, and set its value ti your age

// let myAge = 22

// Log the myAge variable into console

// console.log(myAge)

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// console.log(count)


// Create two variables, myAge and humanDogRatio
// Multiply the two together and store the result in myDogAge
// Log myDogAge to the console

// let myAge = 22
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5

// count + 1

// count = count + 2
// console.log(count)

// create a variable, bonusPoints. Initialize  it as 50. Increase it 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("the button was clicked")
// }

// setting up the race

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// create a function that logs out the number 42 to the console 
// call/invoke the function

// function user(){
//     console.log(42)
// }

// user()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// create a function that logs out the sum of all lap times 

// function lapTimes(){
//     let totalLap = lap1 + lap2 + lap3
//     console.log(totalLap) 
// }

// lapTimes()

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times 



// function lapsCompletedIncrement(){
//     lapsCompleted = lapsCompleted + 1
// }

// lapsCompletedIncrement()
// lapsCompletedIncrement()
// lapsCompletedIncrement()


// console.log(lapsCompleted)

//let count = 5 
//count = count +1 
//console.log(count)

// initialize the count as 0
// listen for clicks on the increment button 
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
} 

