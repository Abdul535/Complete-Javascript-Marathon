
//nested if else or elseif ladder

// winning number 19

// 17 too low
// 19 guess its right
// 20 too high

// let userGuess = prompt("Type the number");
// number = Number(userGuess);
// console.log(typeof number, number);
// if (number >= 20)
//     console.log("too high");
// else if(number >=19)
//     console.log("guess its right");
// else if(number >=17)
//     console.log("too low");
// else
//     console.log('not found');

// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello there");



let tempInDegree = 5;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}