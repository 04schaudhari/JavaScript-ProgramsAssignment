//Create the professor object with properties

let professor = {
 
    name: "Aarnika Chaudhari",
    age: 40,
    department: "Computer Science",
    yearsTeaching: 15,
    university: "Pune University",
    //Nested object degrees
    
    degress: {

        engineering: "Computer Science",
        PHD: "Advanced Computer",
        master:"Software Engineering",
        bachelor: "Information Technology"

    },
    //Array of certificates
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Advanced Programming"
    ]
    
}
console.log(`================Add new property totalExperience==================\n`);
//Add new property totalExperience
professor.totalExperience = "14 years";
console.log(professor);

console.log(`================Modify existing property (e.g., age)==================\n`);
    
//Modify existing property (e.g., age)
professor.age = 45;
console.log(professor);

console.log(`================Add new certificate at the 2nd index==================\n`);
//Add new certificate at the 2nd index

professor.certificates.splice(2,0,"Oracle Certified");

console.log(`================Log the last element of the certificates array==================\n`);
//Log the last element of the certificates array
console.log(professor.certificates[professor.certificates.length-1]);

console.log(`================Traverse the array using a for loop==================\n`);
//Traverse the array using a for loop
for(let i=0; i<professor.certificates.length; i++){

console.log(professor.certificates[i]);

}
console.log(`================Log complete object using for in loop==================\n`);
//Log complete object using for in loop
for(let property in professor){

    console.log(`${property}:${professor[property]}`);
    
}

