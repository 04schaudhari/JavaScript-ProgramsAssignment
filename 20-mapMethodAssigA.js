const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`Given array : ${arrayNumbers}`); 

console.log('======Step1=======\n');
const AddArrNum = arrayNumbers. map((element) => {
    return element + 10;
});
console.log(`After transform array : ${AddArrNum}`); 

console.log('======Step2=======\n');

const cubeArrNum = arrayNumbers.map((element) => {

    return element * element * element;
   
   });
   console.log(`Cube of array elements : ${cubeArrNum}`);

   console.log('======Step3=======\n');

   const addIndexArrElement = arrayNumbers.map((element, index) => {
    return element + index;

});
console.log(`Addition of element and index is: ${addIndexArrElement}`);