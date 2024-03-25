// import inquirer from "inquirer";

// const answers=await inquirer.prompt([
//     {
//         type: "number",
//         name: "numberOne",
//         message: "kindly enter your first number"
//     },
//     {
//         type: "number",
//         name: "numberTwo",
//         message: "kindly enter your second number"
//     },
//     {
//         type: "list",
//         name: "operator",
//         choices: ["additon(+)", "subtraction(-)", "multiplicaton(-)", "division(/)"],
//         message: "please select operator"
//     },


// ])

// // console.log(answers)

// const {numberOne,numberTwo,operator} = answers

// if(numberOne && numberTwo && operator ){
//     let result:number = 0;
//     if(operator === "additon(+)"){
//         result = numberOne + numberTwo
//     }
//     else if(operator === "subtraction(-)"){
//         result = numberOne - numberTwo
//     }
//     else if(operator === "multiplication(*)"){
//         result = numberOne * numberTwo
//     }
//     else if(operator === "division(/)"){
//         result = numberOne / numberTwo
//     }

//     console.log("your result is:",result)
// }
// else{
//     console.log("kindly enter valid input")
// }

// import inquirer from "inquirer";

// const answers:{
//     numberOne:number,
//     numberTwo:number,
//     operation:string
// } = await inquirer.prompt([
//     {
//         type: "number",
//         name: "numberOne",
//         message: "Enter your fist number"
//     },
//     {
//         type: "number",
//         name: "numberTwo",
//         message: "Enter your second number"
//     },
//     {
//         type: "list",
//         name: "operation",
//         choices: ["+", "-", "*", "/"],
//         message: "Select your opearton"
//     }
// ])


// const{numberOne,numberTwo,operation}= answers
// if(numberOne && numberTwo && operation ){
// let result:number = 0
//     if(operation === "+"){
//         result = numberOne + numberTwo
//     }
//     else if(operation === "-"){
//         result = numberOne - numberTwo
//     }
//     else if(operation === "*"){
//         result = numberOne * numberTwo
//     }
//     else if(operation === "/"){
//         result = numberOne / numberTwo
//     }
//     console.log(`the total of ${numberOne} ${operation} ${numberTwo} = ${result}`)
// }
// else{
//     console.log("kindly enter valid input")
// }

import inquirer from "inquirer";

let runagain = 1;
for(let i = 0; i<runagain; i++){

const answers:
{
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select your operator"
    }
])

const {numberOne,numberTwo,operator} = answers
if(numberOne && numberTwo && operator){
let result = 0
if(operator === "+"){
    result = numberOne + numberTwo
}
else if(operator === "-"){
    result = numberOne - numberTwo
}
else if(operator === "*"){
    result = numberOne * numberTwo
}
if(operator === "(/)/"){
    result = numberOne / numberTwo
}
console.log(`The total of ${numberOne} ${operator} ${numberTwo} = ${result}`);

}
else{

}

let ques = await inquirer.prompt({
    type: "input",
    name: "runAgain",
    message: "Are you want another operation ? (yes/no)"
})
if(ques.runAgain === "yes"){
runagain ++
}

}


