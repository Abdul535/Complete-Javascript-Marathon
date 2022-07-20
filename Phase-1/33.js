//for of Loop in Array
const fruits=['apples','mango','grapes'];
const moreFruits = [];
var i=0;
// for(let idx=0; idx<fruits.length; idx++){
//     moreFruits.push(fruits[idx].toUpperCase())
// }
// console.log(moreFruits);

for(let f of fruits){
    moreFruits.push(f)
}
console.log(moreFruits);


