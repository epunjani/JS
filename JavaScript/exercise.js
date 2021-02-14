
/*Consider a string “You forget things you don’t practice”. Perform string operations such that your output string looks like this:
“practice,don’t,you,things,forget,You”

Hint: Make use of split, reverse and join methods
*/

let st = "You forget things you don’t practice";
let st1 = console.log('Split ', st.split(' ').reverse().join(','));

/*Declare the following array ["Greg", "Mary", "Devon", "James"];
Now, do these tasks:
Iterate through array using forEach and print Names and index
Write command to remove James
Write command to remove Greg
Write command to add your name in the array
Write command to display index of ‘Devon’
Write command to display index of ‘Walter’ (this should return -1) 
Declare a new variable withBob, that just has a concatenated entry “bob” in the same people array
*/
let people = ["Greg", "Mary", "Devon", "James"];
people.forEach((index, key) => console.log(index, key)
);
console.log(people.pop());
console.log(people.shift());
console.log(people.push('Ebrahim'))
console.log(people.indexOf('Devon'))
console.log(people.indexOf('Walter'))
let withBob = people.concat('bob');
console.log(people);
console.log(withBob);

/*let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8  };
Write the command to add the language “Swift" to the end of the languages array.
Change the difficulty to the value of 7.	
Write the command to add a new key called isFun and a value of true to the programming object.
Using a loop, iterate through the languages array and console.log all of the languages.
Using a loop, console.log all of the keys and values in the programming object
*/

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8  };
console.log(programming.languages.push('Swift'));
console.log(programming.languages);
programming.difficulty = 7;
console.log(programming.difficulty);
programming.isFun=true;

for(let key of programming.languages){
    console.log(key)
}
for(let key in programming){
    console.log(key, [key])
}
//console.log(programming)
