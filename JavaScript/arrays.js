/*ARRAYS*/ 
//are also objects

let numbers = [1,2,3,4,5,6,7];

// Adding in array
//1. end of array
// numbers.push(29,52);
// console.log(numbers)

//2. start
// numbers.unshift(-4,-2);
// console.log(numbers)

//3. middle
//Splice - 1. index of placement, 2. deletion indexes, 3. values
numbers.splice(4,2,'a', 'b', 'c')
console.log(numbers)

//===Search in primitive types
//1. indexOf
console.log(numbers.indexOf('a')) //returns index, returns -1 if element is not present

//2. includes
console.log(numbers.includes('a'))  //most used -- conditional statement

//search in refrence types

const courses = [
    {id:1, name:'aa', studentsEnrolled: 34, instructor: 'Shariq'},
    {id:2, name:'bb', studentsEnrolled: 35, instructor: 'Shariq'},
    {id:3, name:'cc'},
]
// arrow function ES6
const course = courses.find(course => course.instructor === 'Shariq');
console.log(course);

//before es6
const courseOld = courses.find(function(course){
    return course.name === 'bb'
})
console.log('without arrow function', courseOld);

//Removal - Delete

// //1. end of array--> .pop()
// const last = numbers.pop(); //this constant will save the value that pops
// console.log(last);


// //2. start
// const first=numbers.shift();
// console.log(first);

//3. middle
// numbers.splice(2,3);
// console.log(numbers);

//delete the entire array

let copy = numbers;
//Solution 1
//numbers = [];  //this way will work when there is no more variable refrencing it

//solution 2
//numbers.length=0;

//solution 3
//numbers.splice(0);



console.log('numbers', numbers)
console.log('copy', copy)

// Combining and slicing arrays

const first = [45, 54, 67, 85, 90, false];
const second = ['a', 'b', 'school', 'book']

const combined = first.concat(second);

const slice = combined.slice(); //returns entire array
const slice1 = combined.slice(4, 6); 


console.log(slice1);


//ON REFRENCE TYPES
const refrencetype = [
    {id:2, name:'bb'},
    {id:3, name:'cc'},
]

// const merge = refrencetype.concat(second);
// refrencetype[0].id=34;


//SPREAD OPERATOR

const merge = [...first, 0.1234, ...second, ...refrencetype, true, 'true'];

console.log(merge)

/*Write a function arayInclude that performs functionality of built-in includes method.

Hint: arrayInclude(array, searchElement)
*/
function arrayInclude (array, searchElement){
    for (let key of array)
        if (key === searchElement)
            return true;
}

const array = arrayInclude(second, 'school');
console.log (array);

//forEach() //callback function

first.forEach(
    (key, index) => console.log(index, key)  );


    //SPLIT & JOIN
const command = 'This is commanded by the king';
const parts = command.split(' ');
console.log('split in parts', parts);

//const letsJoin = command.join('-') //join will be called on arrays only, command is a string

const letsJoin = parts.join('-')
console.log('join', letsJoin);

/*Comparing two arrays */
const x =[2, 45, false];
const y =[2, 45, false];
const z = x;
console.log(x === y); // false because array are passed by reference
console.log(x === z); // true because x and z are pointing to same memory location

//(parameter) => ____works on parameters_____
const equals = (firstArray,secondArray) => {
    JSON.stringify(firstArray) === JSON.stringify(secondArray)
};

console.log('is it equal?', equals(x,y));

const food = ['rice', 'bread', 'chicken'];
const junkFood = ['chips', 'popcorn', 'broast'];

console.log('is it equal?', equals(food, junkFood));

let user1 = [1, 'Shamshad', '234abc', 'marketing'];
let user2 = [2, 'Aleena', '246abc', 'marketing'];

//array.filter() creates a new array1 that pass the test in array
const intersection = (a, b) => {
    return a.filter (val => b.includes(val));
}

console.log(intersection(user1, user2));

const kitchen =(y,z) => {
    return y.filter (val => z.includes(val));
}
let output = kitchen(food, junkFood);
if (output && output.length){
    console.log(output)
}
else
    console.log('no values match')

//Sorting, Reverse, Mapping, Reduce

let q= [2,4,6,1,1,1,3,5,-2,-1,-3];
console.log(q.sort());
console.log(q.reverse());

const p = q.filter (val => val>=0);
console.log(p);

//MAP => .map() -> maps each element of array into something else

//mappedeach element into an object having a property 'value'
const p_obj= p.map( key => {
    const obj ={value :key}; //literal value {key: value} 
    return obj;
})
console.log(p_obj);

const namingFood = food.map(key => {
    const obj1 = {menu: key}
    return obj1;
})
console.log(namingFood);   

//mapped each element into a new array element that contains twice of q
let multiples = q.map( val => val * 2);
console.log('multiples of q ', multiples)

let sAdd = food.map (val => val+='s');
console.log('sAdd ', sAdd)


//make an array of object of collegues that contains name, age, deptt.  Extract age into new array
let collegues = [
    {name: 'Bhuvan', age: 35, deptt: 'dev'}, 
    {name: 'Nayma', age: 28, deptt: 'delivery'}, 
    {name: 'Sri', age: 30, deptt: 'support'}
]

let ageMap = collegues.map(val => val.age);
console.log('Ages of collegues ', ageMap)
console.log('Ages of collegues ', ageMap.sort())

// dataset=[];
// const newDataset = dataset
//             .filter(condition)
//             .map(squared)

//chaining .filter() .map()

const items = q.filter(key => key >=0).map(val => ({value:val}));
console.log('chained filters and map ', items);

//REDUCE: reduces array into a single value

let sum = 0;
for(let key of q){
    sum+=key;
}
console.log(sum);

//reduce( (accumulator, currentVal), index)

let reducedArray = q.reduce( (sum,val) => {
    return sum +=val
}, 0 )

// sum = 0 (initialized in function call), val = 2 => sum =2
// sum = 2, val = 4 => sum =6
console.log(reducedArray)


function getMax(array) {
    if (!array || array.length ===0) return undefined;
    
    return array.reduce((key1, key2) => (key1>key2) ? key1 : key2)
}
const max = getMax(q);
console.log(max);

function getAve(array) {
    if(!array || array.length ===0) return undefined;

    let sum =  array.reduce( (sum,val) =>  sum +=val)
    return sum/array.length
}
console.log(getAve(q))

/*Declare and initialize an array called “dynamicArray”. The array must have 3-4 different data type elements.
Iterate over the array and console.log 
. each item in the array 
. Index of each item
. data type of each item

Output should look like:        ‘key: 2 , type of key: number’
*/
let dynamicArry =[
    {name: 'Bhuvan', age: 35, deptt: 'dev'},
    'goodBye Winter',
    -2, 4, 88,
    false
]

dynamicArry.forEach( key => console.log('key', key, 'typeOf', typeof(key)))

/* Declare an array of objects named movies that contains multiple movie details as object ( atleast 7). 
Each object should have properties of title, year and rating. Print it out.

Write an arrow function by chaining filter and map that does the following step by step :
All the movies after 2009 that have rating above 5
Pick their title

Final output should be an array ‘hotPicks’ that contains title of movies.
*/

let movies = [
    {movie: 'movie1', year: 2007, rating: 1},
    {movie: 'movie2', year: 2008, rating: 3},
    {movie: 'movie3', year: 2008, rating: 5},
    {movie: 'movie4', year: 2009, rating: 2},
    {movie: 'movie5', year: 2009, rating: 4},
    {movie: 'movie6', year: 2010, rating: 5},
    {movie: 'movie7', year: 2010, rating: 1},
]
console.log(movies);

const hotPicks = movies
                        .filter(key => key.year >=2009 && key.rating == 5)
                        .map(val => val.movie);
console.log('chained filters and map ', hotPicks);

/*Write a function frequency that counts occurrence of a value in an array and 
return a single value that contains the count.

Hint: frequency(array, searchElement)
let q= [2,4,6,1,1,1,3,5,-2,-1,-3];
*/

function frequency (array, searchElement) {
    let count =0;
    return array.reduce((accumulator, current) => {
        (current === searchElement) ? count =1 : count =0;
        return accumulator + count
    },0);
}

console.log('frequency ', frequency(q,1))
console.log('dynamicArray ', frequency(dynamicArry,false))


/*FIND - only pick first occurance*/
var users = [
    {id: 101, name: 'Alex'},
    {id: 102, name: 'Bill'},
    {id: 103, name: 'Alex'},
]

let foundUser = users.find(el => el.name === 'Alex')
// for (let i=0; i<users.length; i++){
//     if(users[i].name ==='Alex')
//     foundUser = users[i];
// }

console.log(foundUser);

//1. write constructor function Car
//2. we will find car of a specific model

function Car(model, year){
    this.model = model;
    this.year = year;
}

let cars = [
    new Car('Tesla', 2021),
    new Car('honda civic', 1998),
    new Car('toyota corolla', 2016),
    new Car('Tesla', 2020),
    new Car('gmc', 1990)
]
const myTesla = cars.find(car => car.model =='Tesla') // if need all Tesla then use filter
console.log(myTesla)

//varmyCar = new Car ('Tesla')

/* EVERY AND SOME HELPER  - return one single BOOLEAN value */

var computers = [
    {model: 'apple', ram: 32}, //true
    {model: 'hp', ram: 20}, //true
    {model: 'acer', ram: 4}, //false
    {model: 'dell', ram: 64}, //true
]
//Whether or not all my computers can run a software that equires 16gb ram

var allCanRun = true;
var onlySomeCanRun = false;

for (var i=0; i<computers.length; i++){
    var computer = computers[i];

    if(computer.ram<16)
        allCanRun= false;
    else
        onlySomeCanRun = true;
}

console.log('all can run: ', allCanRun)
console.log('some can run: ', onlySomeCanRun)

// above code can replace with EVERY helper

let result = computers.every(computer => computer.ram > 16)
console.log('all can run: ', result)

let result1 = computers.some(computer => computer.ram > 16)
console.log('all can run: ', result1)

/* Write an array “names” that contains strings. For this array, 
check whether or not all of the names have length greater than 4.
*/

var names = ['asif', 'haroon', 'amjad', 'Aby'];
let shortName = names.every(name => name.length > 4)
console.log('name with less than 4 character: ', shortName)

let shortName1 = names.some(name => name.length > 4)
console.log('name with less than 4 character: ', shortName1)

//Signup field validator
function Fields(value){
    this.value = value;
}

var username    = new Fields('shakarqandee');
var password    = new Fields('passworld123');
var birthday    = new Fields('1-1-1999');
var city        = new Fields('Karachi');
var country     = new Fields("Pakistan");

console.log(username, password)

Fields.prototype.validate = function(){
    return this.value.length > 0;
}

// let valid = username.validate() && password.validate();
// console.log('Valid User: ', valid)

let fields = [username, password, birthday, city, country];

let valid1 = fields.every(field => field.validate());
console.log('Valid1 User ', valid1)

if(valid1){
    console.log('user is valid user. you may proceed to sign in');
}
else {
    console.log('kindly complete all fields')
}

let primaryColors = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'orange'},
    {color: 'green'},
]

// change into [red, green, blur, orange]

let compiled = primaryColors.reduce((mem, primaryColor) =>{
    mem.push(primaryColor.color)

    return mem
}, [] )

console.log(compiled);

/*
    "()()()" valid
    "()())" invalid
    "((()))" valid
    ")(" invalid
*/

function balancedParaens(string){
    let array = string.split('')
    return !array.reduce((accumulator, char) => {
        if(accumulator < 0) return accumulator
        if(char === '(') {return ++accumulator}
        if(char === ')') {return --accumulator}
        return accumulator;
    }, 0)
}

console.log(balancedParaens('(()()())'))


















