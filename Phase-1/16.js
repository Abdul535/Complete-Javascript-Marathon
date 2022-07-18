// Logical and or operator
            // T && T -> T
            // else all are false 

            // F || F -> F
            // else all are true 
let fname = "zbdullah";
let age=2;

if ( fname[0] == 'a' && age>=18)
    console.log("AND: Name starts with a , and you are above 18 ")
else
    console.log("AND: Name doesn't matches, and you are below 18")

if ( fname[0] == 'a' || age>=18)
    console.log("OR: either Name starts with a or you are above 18 ")
else
    console.log("OR: Name doesn't matches and you are below 18")

