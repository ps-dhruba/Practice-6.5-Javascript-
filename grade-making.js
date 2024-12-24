const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Your Mark: ", (mark) => 
{
    mark = parseInt(mark);

    if (mark >= 0 && mark < 40) console.log("You got : C");
    else if (mark >= 40 && mark < 60) console.log("You got : B");
    else if (mark >= 60 && mark < 80) console.log("You got : A-");
    else if (mark >= 80 && mark <= 100) console.log("You got : A+");
    else console.log("Invalid Mark");

    rl.close();
});
