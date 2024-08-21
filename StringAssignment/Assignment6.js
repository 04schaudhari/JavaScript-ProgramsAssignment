// 6. Reverse String: Recommended to use define the functions
//  ○ Reverse the string using any existing methods that you know
//  ➢ const str = "Software";
//  ➢ const str = “UI Developer”

// Function to reverse a string using existing methods
function reverseStringUsingMethods(str) {
    return str.split("").reverse().join("");
}

// Test cases
const str1 = "Software";
const reversedStr1 = reverseStringUsingMethods(str1);
console.log(`Reversed string of "${str1}" is: ${reversedStr1}`);

const str2 = "UI Developer";
const reversedStr2 = reverseStringUsingMethods(str2);
console.log(`Reversed string of "${str2}" is: ${reversedStr2}`);

console.log(`\n======================Reverse the string without using predefined methods.=======================\n`);


// Reverse the string without using predefined methods.
// ➢ const str = "Web Developer";
// ➢ const str = “Billion Dollar”;
// ➢ const str = “Java

// Function to reverse a string without using predefined methods
function reverseStringWithoutMethods(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test cases
const str3 = "Web Developer";
const reversedStr3 = reverseStringWithoutMethods(str3);
console.log(`Reversed string of "${str3}" is: ${reversedStr3}`);

const str4 = "Billion Dollar";
const reversedStr4 = reverseStringWithoutMethods(str4);
console.log(`Reversed string of "${str4}" is: ${reversedStr4}`);

const str5 = "Java";
const reversedStr5 = reverseStringWithoutMethods(str5);
console.log(`Reversed string of "${str5}" is: ${reversedStr5}`);