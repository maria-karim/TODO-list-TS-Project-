//TODO LIST [TS--Project]
import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];

let conditions = true;
console.log(chalk.magentaBright.bold("\n\t Welcome to codeWithMaria - Todo-list Application\n"));

while(conditions){
 let addTask = await inquirer.prompt([
    {
        name : "task",
        type : "input",
        message :chalk.green( "Enter your New Task :")
    }
 ]);
 todolist.push(addTask.task);
 console.log('${addTask.task} Task added in Todo-List sucessfully')
 
 let addMoreTask = await inquirer.prompt([{
  
    name:"addmore",
    type : "confirm",
    message :chalk.yellowBright.bold( "Do you want to add more task ?"),
    default : "False"
 }]);
 conditions = addMoreTask.addmore
}
console.log("Your updated Todo-list:", todolist);