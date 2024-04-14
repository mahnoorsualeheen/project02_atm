#!/usr/bin/env node
console.log("_______________________________");
console.log("**********ATM MACHINE**********");
console.log("_______________________________");
//Starting balance
let myBalance = 15000;
// Pin code 
let myPin = 1234;
import inquirer from "inquirer";
let pinNo = await inquirer.prompt({
    message: "Enter your Pin Code : ",
    name: "pin",
    type: "number"
});
if (pinNo.pin === myPin) {
    let operationAns = await inquirer.prompt({
        message: "Select option you wants to do",
        type: "list",
        choices: ["withdraw", "checkBalance", "fastCash", "changePin"],
        name: "operation",
    });
    if (operationAns.operation == "withdraw") {
        let amountAns = await inquirer.prompt({
            message: "Enter amount : ",
            type: "number",
            name: "amount",
        });
        {
            if (amountAns.amount <= 20000) {
                myBalance -= amountAns.amount;
                console.log(`Your remaining balance is ${myBalance}`);
            }
            else {
                console.log("Insufficient Balance");
            }
        }
    }
    else if (operationAns.operation === "checkBalance") {
        console.log(`Your Balnace is ${myBalance}`);
    }
    else if (operationAns.operation === "fastCash") {
        let fast = await inquirer.prompt({
            message: "Fast Cast withdrawal ",
            name: "fastCash",
            type: "list",
            choices: ["1000", "2000", "5000", "10000"]
        });
        if (myBalance > fast.fastCash && fast.fastCash === "1000") {
            myBalance -= fast.fastCash;
            console.log(`Your remaining balace is ${myBalance}`);
        }
        else if (myBalance > fast.fastCash && fast.fastCash === "2000") {
            myBalance -= fast.fastCash;
            console.log(`Your remaining balace is ${myBalance}`);
        }
        else if (myBalance > fast.fastCash && fast.fastCash === "5000") {
            myBalance -= fast.fastCash;
            console.log(`Your remaining balace is ${myBalance}`);
        }
        else if (myBalance > fast.fastCash && fast.fastCash === "10000") {
            myBalance -= fast.fastCash;
            console.log(`Your remaining balace is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else {
        let oldPin = await inquirer.prompt({
            message: "Enter your Pin : ",
            type: "number",
            name: "pin"
        });
        if (oldPin.pin === myPin) {
            let newpin = await inquirer.prompt({
                message: "Enter your New Pin: ",
                type: "number",
                name: "newPin"
            });
            myPin = newpin.newPin;
            console.log(`Your New Pin Code is ${myPin}`);
        }
        else {
            console.log("Invalid Pin code");
        }
    }
}
else {
    console.log("Invalid Pin code");
}
