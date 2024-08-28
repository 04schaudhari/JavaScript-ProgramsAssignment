console.log(`==== Sorting array in ascending ,descending and reverse order========================`);

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]

console.log(`Given array is:${arrayRollNumbers}`);

console.log(`============Step1==============\n`);

const arrayReverse = arrayRollNumbers.reverse();

console.log(`Reversed array:${arrayReverse}`);

console.log(`==========Step2================== `);

const arrayRollNumbers1 = [113,45,56,11,32,45,109,799,56,45]

console.log(`Given array is:${arrayRollNumbers}`);

const arraySorted = arrayRollNumbers1.sort();

console.log(`Sorted Array:${arraySorted}`);

console.log(`==============Step3============`);

const arrayRollNumbers2 = [113,45,56,11,32,45,109,799,56,45]

console.log(`Given array is:${arrayRollNumbers2}`);

arrayRollNumbers2.sort((n1,n2)=> {

     return n1>n2?1:-1;
});
console.log(`Array sorted in ascending order is:${arrayRollNumbers2}`);

console.log(`===========Step4===============`);

const arrayGreatestNum = arrayRollNumbers2[arrayRollNumbers2.length-1];

console.log(`Greatest Number from array is:${arrayGreatestNum}`);

console.log(`==============Step5===============`);

const arraySmallestNum = arrayRollNumbers2[0];

console.log(`Smallest Number from array is:${arraySmallestNum}`);

console.log(`=============Step6===============`);

const arrayOne = [113,45,56,11,32,45,109,799,56,45];

console.log(`Given array is:${arrayOne}`);

let newArray = [];

for (let index = 0; index < arrayOne.length; index++) {

    let element = arrayOne[index];

    if (newArray.indexOf(element) == -1) {

        newArray.push(element);
    }

}
console.log(`Array with unique element:${newArray}`);