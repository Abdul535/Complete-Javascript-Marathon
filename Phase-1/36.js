// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 
const person = {
    name: 'abd',
    age: 21,
    study: 'B.E IT',
    friends:['najeeb','faizan','rahmath']
}

//changing the value for the given pair
person.name = 'syed';

//two ways of accessing the objects
console.log('accessing using dot: ' + person.name);
console.log('accessing using squareBrackets: ' + person['name']);

//changing the value of array in object
person.friends[1] = 'ahmed';
console.log(person.friends[1]);

//adding new key value pair
person['weight'] = 83;
console.log(person.weight)




