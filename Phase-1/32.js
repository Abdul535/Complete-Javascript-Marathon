//for loop in an array
const fruits=['apples','mango','grapes'];
const moreFruits = [];
var i=0;
while (i < fruits.length){
    moreFruits.push(fruits[i].toUpperCase())
    i++;
}
console.log(moreFruits)