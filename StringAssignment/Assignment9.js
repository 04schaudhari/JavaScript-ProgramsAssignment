// 9.  Program to count words: Define a function wordCount( ) with one 
// argument and call this function by passing below strings one by one. This 
// function must return the word count that’s been passed as an argument.
//  ○ “JavaScript The language of Internet”
//  ○ “Enhance Your Learning Journey with Exclusive Add-ons”
//  ○ “Beyond frameworks, Beyond Imagination”
//  ○ “I am passionate software developer”

console.log(`=======================Count Words Using trim() and split() method====================\n`);

function wordCount(str){

    const words = str.trim().split(' ');
    return words.length;

}

const str1 = "JavaScript The language of Internet";
console.log(`Given String is: "${str1}" and Word Count of the String is: ${wordCount(str1)}\n`);


const str2 = "Enhance Your Learning Journey with Exclusive Add-ons";
console.log(`Given String is: "${str2}" and Word Count of the String is: ${wordCount(str2)}\n`);


const str3 = "Beyond frameworks, Beyond Imagination";
console.log(`Given String is: "${str3}" and Word Count of the String is: ${wordCount(str3)}\n`);


const str4 = "I am passionate software developer";
console.log(`Given String is: "${str4}" and Word Count of the String is: ${wordCount(str4)}\n`);


