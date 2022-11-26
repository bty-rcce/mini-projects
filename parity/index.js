function parity(number){
    if (number % 2 == 0) {
        return "Even"
    } 
    else {
        return "Odd"
    }

}

var sentence = prompt("Enter a number ");
console.log("You entered an " + parity(number) + " number!");