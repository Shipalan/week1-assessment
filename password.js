console.log('Welcome to the password validator tool.');

const readline = require('readline');


//boilerplate code
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//end boilerplate code


console.log(`%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")

reader.question("Enter a password ", function(input){

    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if (input.match(specialChars)){
        if (input.length >= 10){
            console.log("Valid password")
        } else {
            console.log('Invalid password!')
        }
    } else {
        console.log('Invalid Password!');
    }
    
	reader.close()

});

