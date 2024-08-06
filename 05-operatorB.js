console.log(`\n=======================Step 1===================================\n`);
function greaterNumber(num1,num2){

    const greater = num1>num2 ? num1 : num2;
    console.log(`The Greater Number is Between ${num1} and ${num2} is: ${greater}`);
    

}
greaterNumber(10,-10)
greaterNumber(800,899)

console.log(`\n=======================Step 2===================================\n`);

function isEvenOrOddNum(num){

    const isEven = num %2 == 0;
    var resultValue =isEven==0 ? "Given number is Even" : "Given Number is Odd Number";
    console.log(`Given Number is: ${num}`);
    
    console.log(resultValue);
    console.log(`\n`);
    
    
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`\n=======================Step 3===================================\n`);

function wordLength(string) {
    console.log(`Given string is: ${string}`);
    console.log(`Length of string is: ${string.length}`);
    var result =
      string.length % 2 == 0
        ? `Given number is "EVEN"\n`
        : `Given number is  "ODD"\n`;
    return result;
  }
  var resultValue = wordLength("JavaScript");
  console.log(resultValue);
  var resultValue = wordLength("Developer");
  console.log(resultValue);
  var resultValue = wordLength("Google");
  console.log(resultValue);
