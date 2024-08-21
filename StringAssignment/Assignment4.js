// 4. WAP to check whether given strings contains word ‘UI’ or not?
// ○ const str = “React - UI Developer”
// ○ const str = “UI Developer”
// ○ const str =  “Front end and backend technologies”

function stringContain(str){

    return str.includes('UI');
}

const str1 = "React UI-Developer"
console.log(`Given String is : ${str1} => Given strings contains word ‘UI’ or not: ${stringContain(str1)}\n`);

const str2 = "UI Developer"
console.log(`Given String is : ${str2} => Given strings contains word ‘UI’ or not: ${stringContain(str2)}\n`);

const str3 = "Front end and backend technologies"
console.log(`Given String is : ${str3} => Given strings contains word ‘UI’ or not: ${stringContain(str3)}\n`);


