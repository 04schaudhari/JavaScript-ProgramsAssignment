//8. Program to count vowels: Define a function vowelsCount( ) with one 
// argument and call this function by passing below strings one by one. This 
// function must return the vowels count that’s been passed as an argument.
//  ○ “JavaScript”
//  ○ “HTML and CSS”
//  ○ “Language Of Internet”
//  ○ “I am UI Developer”
//  ○ “Do or Die”
//  Note: While counting vowel, consider the lower & upper-case vowels as well

console.log(`=======================Count Vowels lower & upper-case vowels====================\n`);

function vowelsCount(str){

    let count = 0;
    str = str.toLowerCase();
    const vowel ='aeiou';

    for(let i=0; i<str.length; i++){

        if(vowel.includes(str[i])){
            count++;
        }
    }

    return count;

}

str1 = "JavaScript";
console.log(`Given String is "${str1}" and Vowel in the String is: ${vowelsCount(str1)}\n`);

str2 = "HTML and CSS";
console.log(`Given String is "${str2}" and Vowel in the String is: ${vowelsCount(str2)}\n`);

str3 = "Language Of Internet";
console.log(`Given String is "${str3}" and Vowel in the String is: ${vowelsCount(str3)}\n`);

str4 = "I am UI Developert";
console.log(`Given String is "${str4}" and Vowel in the String is: ${vowelsCount(str4)}\n`);

str5 = "Do or Die";
console.log(`Given String is "${str5}" and Vowel in the String is: ${vowelsCount(str5)}\n`);


