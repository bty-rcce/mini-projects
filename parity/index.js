function parity(number) {
    if (number % 2 == 0)
        return "Even"
    else 
        return "Odd"
}

var number = prompt("Enter a Number ")
console.log("You entered an " + parity(number) + " number!")