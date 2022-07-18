//undefined

let fName;
console.log(typeof fName, fName)
fName = 'Syed';
console.log(typeof fName, fName)

//null
console.log("all about null")
let myvar = null;
console.log(typeof myvar, myvar);  //bug in js that typeof null is object
myvar = 'abd'
console.log(typeof myvar, myvar)

//BigInt
console.log('all about BigInt');
console.log(Number.MAX_SAFE_INTEGER); //max number it can hold that is 9007199254740991
//BigInt can be written in two ways 
//1st way
let myNum1 = BigInt(7199254740994);
//2nd way
let myNum2 = 145n;
console.log(myNum1 + myNum2);
