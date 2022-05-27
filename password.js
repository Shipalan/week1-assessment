console.log('Welcome to the password validator tool.');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

  



	// This line closes the connection to the command line interface.
	reader.close()

});

