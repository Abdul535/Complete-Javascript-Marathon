//break and continue keywords

// if i hit 4 break and exit the loop;
// for(let i=0; i<=100; i++){
//     if(i == 4){
//     console.log("the value of i is ", i);
//     break;
//     }
//     console.log(i);
// }
// console.log("over");

// if i hit 4 continue to skip that one and continue to next iteration;
for(let i=0; i<=10; i++){
    if(i == 4){
    console.log("the value of i is ", i);
    continue;
    }
    console.log(i);
}
console.log("hitted 4");
