function acronym(sentence){
    // get the first letter of each string
    var acronym = "";

    // split words from sentence
    var words = sentence.split(" ");
    console.log(words);
    
    // go through each word in words
    for (i in words) {
        // get the first letter of each string
        letters = words[i].split("");
        acronym += letters[0];
    }
    return acronym;
}

// var sentence = prompt("Enter a short sentence ");
console.log(acronym("Rovin Czar"));