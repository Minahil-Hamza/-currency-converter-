#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t welcome to 'Minahil Code World' - Currency Converter\n"));
// currencies & their exchange rate :
const exchange_rate = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 277.70, // PAKISTANI CURRENCY
};
const user_answer = await inquirer.prompt([{
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// Perform Currency Conversion by Using Formula :
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Conversion :
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the Converted Amount :
console.log(`converted_amount = ${chalk.green(converted_amount.toFixed(2))}`);
