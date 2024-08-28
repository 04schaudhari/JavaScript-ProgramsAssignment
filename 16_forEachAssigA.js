const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601]

console.log(`=================Step1====================`);


arrayNumbers.forEach((currentValue,index)=>{

    console.log(`Index:${index} and Value:${currentValue}`);

})

console.log(`=================Step2====================`);

arrayNumbers.forEach((element)=>{

    if (element>0) {

        console.log(element);
        
    }

})

console.log(`=================Step3====================`);
const newArr = [];
arrayNumbers.forEach((element)=> {
            if (element < 0) {
                newArr.push(element);

            }
        });
        newArr.forEach(element => {
            console.log(element);

        });


console.log(`=================Step4====================`);
 arrayNumbers.forEach((element) => {
            if ( element % 2 == 0) {
                console.log(element);
    
            }
        });

console.log(`=================Step5====================`);

        let sum = 0;
        arrayNumbers.forEach((element) => {
            sum = sum + element;
        });
        console.log(`Given array number sum is : ${sum}`); 
    
console.log('=============Step6=============');
    
        arrayNumbers.forEach((element, index) => {
            if (index % 2== 0) {
                console.log(element);
    
            }
        });