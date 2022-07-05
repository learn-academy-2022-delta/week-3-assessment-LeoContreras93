// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

//ReferenceError: Fibonacci is not defined

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
//create a function called Fibonacci
//input: number greater than 2 
//output: array that length containing the numbers of the Fibonacci sequence.
// .length built in method or .map
//convert number to array


const fibonacci = (num) => {
    let fibo = [0, 1]
    for(let i = 2; i < num; i++) {
        fibo.push(fibo[i-1] + fibo[i-2])
    } return Array.from(fibo) + (num)
}

//Received: "0,1,1,2,3,56"
//not sure where I am going wrong here? I get a very close output.





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("oddLess", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        expect(oddLess(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddLess(fullArr2)).toEqual([-823, 7, 23])
    })
})
//ReferenceError: oddLess is not defined

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//create a function name oddLess
//takes in one parameter 
//use .filter method to remove anything that is not a number



// const onlyOdds = fullArr1.filter(Number)


const oddLess = (array) => {
    let oddOnlys = (array)
    return oddOnlys.filter()
}

// I am trying to pass in an array and return an array of only numbers
//then use Math.min to return lowest values?



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("accumSum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumSum(numbersToAdd3)).toEqual([])
    })
})
// ReferenceError: accumSum is not defined

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

//create a function called accumSum
//use .reduce method to check each element in the array and return the sum of all elements in the array?
//

const accumSum = (sum) => {
    total = sum
    return sum.reduce(total)
}

//my over all thoughts on the majority of these questions is I am lost. I seem to either have trouble understanding the question and the way its written as well as not grasping functions entirely. I am taking coding courses outside of the bootcamp on Javascript functions to get a better understanding through codedacemy.