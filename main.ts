#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 15000
let myPin = 2006
let pinCheck = await inquirer.prompt([
    {
    name:"pin",
    message:"enter your 4 digit pin code",
    type:"number"
} ]
);
if (pinCheck.pin === myPin){
    let operation = await inquirer.prompt([
        {
            message:"Select any one",
            name:"list",
            type:"list",
            choices:["withdraw","fast cash","balance check"] 
        }
])
if (operation.list === "withdraw"){
    let amount = await inquirer.prompt([
        {
            name:"amount",
            message:"enter your amount",
            type:"number"
       } 
])

if (amount.amount <+myBalance && amount.amount >=500){
    myBalance -= amount.amount
    console.log("your remaining balance is:" + myBalance);
}
else {
    console.log("invalid amount")
}
} if(operation.list === "balance check" ){
    
    console.log("your balance is:" +myBalance);}

    if (operation.list === "fast cash")
    {
        let amountAns = await inquirer.prompt(
            
            [
                {
                    name:"amount",
                    message:"select amount ",
                    type:"list",
                    choices:[1000,1500,3000,5000,10000]
                    
                }
            ]
            );
{ myBalance -= amountAns.amount
console.log ("your remaining balance is:" +myBalance)}
            
    }
}
else { console.log("incorrect pin code")
}