console.log(`\n=======================Step 1===================================\n`);


function squareOfWordLength(str1) {

var lengthOfString = str1.length;
var squareOfStringLength = str1.length * str1.length;
    
console.log(`Given String is:"${str1}", Length Of Square: ${squareOfStringLength}`);

}
squareOfWordLength("JavaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Web Developer Smart")

console.log(`\n=======================Step 2===================================\n`);

function string(){

    var str="I am Angular Developer";
    console.log(`Given String is: ${str}`);

    var str1=str.length;
    console.log(`Given String Length is: ${str1}`);

   var result=str.split(" ").length;
   console.log(`Total number of words: ${result}`);

//    console.log(`Total number of words: ${result.length}`);
   

var divideResult=str1/result;
console.log(`String length and Divide by the total words available in that string: ${divideResult}\n`);


var multipleResult=str1 * result;
console.log(`String length and Multiple by the total words available in that string: ${multipleResult}\n`);

    
}
string();