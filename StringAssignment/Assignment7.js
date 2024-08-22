// 7.  Program to count character ‘a’: Define a function charCount( ) with one 
// argument and call this function by passing below strings one by one. This 
// function must return the char count. 
// Note: Count the both small case ‘a’ or capital case ‘A’ character 
// ○ “JavaScript”
//  ○ “Do or Die”
//  ○ “Learn with us, Job with us”
//  ○ “Empowering Dreams, Guaranteeing Futures”
//  ○ “Anny, My favorite fruit is Apple”
console.log(`=======================Count the Character 'a' and 'A'====================\n`);

function charCount(str){

    let count = 0;
    str = str.toLowerCase();

    for(let i=0; i<str.length; i++){
        if(str[i]=='a'){

        count++;

        }
    }

    return count;

}

str1 ="JavaScript";
console.log(`The Given String is "JavaScript" and Count of the 'a' and 'A' in this String is: ${charCount(str1)}\n`);


str2 ="Do or Die";
console.log(`The Given String is "Do or Die" and Count of the 'a' and 'A' in this String is: ${charCount(str2)}\n`);


str3 ="Learn with us, Job with us";
console.log(`The Given String is "Learn with us, Job with us" and Count of the 'a' and 'A' in this String is: ${charCount(str3)}\n`);


str4 ="Empowering Dreams, Guaranteeing Futures";
console.log(`The Given String is "Empowering Dreams, Guaranteeing Futures" and Count of the 'a' and 'A' in this String is: ${charCount(str4)}\n`);


str5 ="Anny, My favorite fruit is Apple";
console.log(`The Given String is "Anny, My favorite fruit is Apple" and Count of the 'a' and 'A' in this String is: ${charCount(str5)}\n`);