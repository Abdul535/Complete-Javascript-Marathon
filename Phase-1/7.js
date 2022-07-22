//String methods
//String is unmutable

// trim() -remove white spaces from the string from beginning and ending

// toUpperCase() -returns the string with uppercase

// toLowerCase() -return the string with lower case

// slice() -slice the string and return the value
    // slice(start index,end index(exclusive)) ;
    //"hello".slice(1,3) --->"el"

    //slice(start index(inclusive));
    //"hello".slice(1) --->"ello"

    //slice can also access negative index
    // h    e   l   l   o
    // -5   -4  -3  -2  -1
    //"hello".slice(-3) --->"llo"

// concat()
        // string.concat(string1, string2, ..., stringX);
        //ex: "hello".concat(" ","world");  ---->"hello world"

// length
        //string.length returns the length of the string 
        //"hello".length ---->5

// indexOf()
        //string.indexOf(<char>) returns index of that char
        //"hello".indexOf("h")  -------->0
        //string.indexOf(<char>,<index>) returns that char occurences after that index 
        //"hello world".indexOf("o",5)  -------->7

// valueOf() 
        //string.valueof()  returns same string
        //"hello".valueOf() ------>"hello"
        
// toString()
    // The string.toString() method can be used to convert any number to string or object into a string.
    //let str = new String("hello"); ---> [ string: "hello"]
    //str.toString() --->"hello"

// replace()
    //string.replace(arg1, arg2) method can be used to replace arg1 (also written as regex) to arg2 
    // let text = "Mr Blue has a blue house and a blue car";
    // let result = text.replace(/blue|house|car/gi, function (x) {
    //   return x.toUpperCase();
    // }); -------------->'Mr BLUE has a BLUE HOUSE and a BLUE CAR'

// repeat()
    // string.repeat(count) method repeat the strings without spaces
    // "hello".repeat(2) ---->'hellohello'

// split()
    // The string.split(delimiter,limit) method splits a string into an array of substrings acc to delimiter and limit can be written for N no of substrings
    // The split() method returns the new array.
    //"my name is abdullah".split(" ") --->["my", "name", "is", "abdullah"]
    // "my name is abdullah".split("a") --->['my n', 'me is ', 'bdull', 'h']

// substr()
    //same as slice but doesn't have negative values 
    // If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
    // Start or end values less than 0, are treated as 0.
    //but in slice() it doesn't happen

let str = "hello";

// s   l   i   c   e
// 0   1   2   3   4 -array can be accessed
// -5  -4  -3  -2  -1 -.slice() can also access negative indexing
let res = str.slice(1,6);
// let res = str.slice(1);
console.log(res)




console.log("length of the string is " + str.length);

// res = str.toLowerCase();
// console.log(res);

// res = str.toUpperCase();
// console.log(res);
