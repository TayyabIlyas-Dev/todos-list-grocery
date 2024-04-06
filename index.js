#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let question = await inquirer.prompt([
        {
            name: "QAns",
            type: "input",
            message: "Add things in your 'TODOS' List! 🛒"
        },
        {
            name: "condans",
            type: "confirm",
            message: "Do You want to Add More things in your TODOS List 📲 ? ",
            default: "true"
        }
    ]);
    todos.push(question.QAns);
    console.log(todos);
    condition = question.condans;
    if (condition == false) {
        let removeitemq = await inquirer.prompt([
            {
                name: "removetodosquestion",
                message: "Do u want to remove any thing in your 'Todos List' 🎚️",
                type: "confirm",
                default: true
            },
        ]);
        if (removeitemq.removetodosquestion == true) {
            let removeitem = await inquirer.prompt([
                {
                    name: "removetodos",
                    message: "Select the item you want to remove: ✂️",
                    type: "list",
                    choices: todos,
                }
            ]);
            let index = todos.indexOf(removeitem.removetodos);
            todos.splice(index, 1);
            console.log(`Items Remove Succesfully 👍🏻`);
            console.log("Your Todos List Is");
            console.log(todos);
        }
    }
}
