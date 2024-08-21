// 2 .   WAP to print or log the last character of the given strings
//  ○ const str = “Hey, my friend, Programming Language”
//  ○ const str = “I am learning logical programs”
//  ○ const str =  “Angular”

console.log(`======================The length of the string=============================\n`);

function lastCharacter(str) {

    let Result =str.charAt(str.length-1);
    console.log(`The Given String is: ${str} AND last Character of the String is: ${Result}`);
    
}

lastCharacter("Hey, my friend, Programming Language");
lastCharacter("I am learning logical programs");
lastCharacter("Angular");