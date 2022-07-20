//for in loop
const fruits=['apples','mango','grapes'];
const moreFruits = [];
var i=0;

for(let f in fruits){
    moreFruits.push(fruits[f].toUpperCase());
}
console.log(moreFruits);
