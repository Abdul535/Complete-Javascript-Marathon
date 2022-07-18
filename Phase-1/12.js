//booleans & comparison operator

//booleans
//true, false

let num1=7;
let num2='8';

console.log(num1 > num2);

//== and ===
//    == will be comparing the only values if equal thats true
//    === will be comparing the values as well as the datatype if equal thats true
console.log('line14' + num1 == num2);
console.log('line15' + num1 === num2);

// != and !==
//    != will be comparing the only values if equal thats false 
//    !== will be comparing the values as well as the datatype if equal thats false 
            // its like num1 != num2 || num1.datatype != num2.datatype 
            // T && T -> T
            // else all are false 

            // F || F -> F
            // else all are true 

console.log('line18' + num1 != num2); //true
console.log('line19' + num1 !== num2); //true