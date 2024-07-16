#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "input",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: [
                { name: "withdraw", value: "withdraw" },
                { name: "checkbalance", value: "checkbalance" },
            ],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountansAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "list",
                choices: [
                    { name: "1000", value: "1000" },
                    { name: "2000", value: "2000" },
                    { name: "30000", value: "30000" },
                ],
            },
        ]);
        if (myBalance > amountansAns.amount) {
            myBalance -= amountansAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("insifician balance");
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number.");
}
