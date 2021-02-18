// fizzbuzz problem: 
// divisible by 3 --> fizz
// divisible by 5 --> buzz
// divisible by 3 and 5 --> fizzbuzz

export function hello(){
    console.log('we inside functions file')
}

export function fizzBuzz(input){
    if (typeof input !== 'number')
    return 'not a number'
    
    else if ((input %3 ===0) && (input %5 ===0))
    return 'fizzBuzz';

    else if (input %3 ===0)
    return 'fizz'

    else if (input %5 ===0)
    return 'buzz'

    else 
    return input;

}

export function areEqual(a1, a2){
    return a1.streetAddress === a2.streeAddress && a1.city === a2.city && a1.zipCode === a2.zipCode
}

export function areSame(x,y){
    return x === y;
}

//function declaration
export function walk(){
    console.log('i am walking')
}
//call function
walk();

//function expression - checks for order of function defination. Can not be called before defination
const run = function(){
    console.log('i am running')
}

run() //it is a function stored in variable
console.log(run);

/* Function arguments */

function sum(){
    let total =0;
    console.log(arguments); //argument is built-in every js function
    for (let value of arguments){
        total += value;
    }
    
    return total;
}

console.log('sum ', sum(1)); // only one value => 1 + undefined => not a number (NaN)
console.log('sum ', sum(1,4,7)); // only two values will be used by function 1+4=5.  remaining value will be ignored
console.log('sum ', sum('hi','hello'));//concatinate strings => hihello
console.log('sum ', sum(1,4,6,21,5));

/*REST operator ... */
function another(a,...args){

    return args.reduce((a,b)=> a+b)
}
console.log('another ', another(11,4,64));
const mix= ['hi', 'hello', 8, 3, 'book', 'chair', 5];

let stringsOnly = mix.filter(val => typeof(val) == 'string' )
console.log(stringsOnly)






