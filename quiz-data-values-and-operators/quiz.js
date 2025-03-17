const readline = require('readline-sync');
console.log(readline);

let name = readline.question("What is your name?");
console.log("hello," + name + ", Welcome to the Quiz!\n"); //greeting and name 

// Ask Questons 
 let Q1 = readline.question(" Q1. True or False: 'false' is a truthy statement?");
 let Q2 = readline.question(" Q2. True or False:'NaN' is a falsy statement?");
 let Q3 = readline.questionInt("Q3. What is the result of '2' + 2?");
 let Q4 = readline.question ("Q4. What type of data type is 'lucky'?");
 let Q5 = readline.question("Q5. What type of data is the value Null?");
// Print Answers                                                        
console.log ("\nYour Answers:");
console.log ("Q1 Answer:" + Q1);
console.log ("Q2 Answer:" + Q2);
console.log ("Q3 Answer"  + Q3);
console.log ("Q4 Answer:" + Q4);
console.log ("Q5 Answer:" + Q5);
