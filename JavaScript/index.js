import{hello, fizzBuzz, areEqual, areSame} from './functions.js'


console.log('we are connected?')

var num = undefined;
console.log(num);

num=63;
console.log(typeof(num));

let firstName ='ebrahim';
let lastName = 'punjani';

console.log(firstName, lastName);

const insterestRate=0.3; //cannot change

let isApproved = false;
let fetched = undefined;

//object
let person = {
    name: 'ebrahim',
    age: '25',
    state: 'texas',

}
console.log(person);

// let movie = {
//     name: undefined,
//     cast: undefined,
//     language: 'english',


// }
// console.log(movie)

// movie.name='Home alone';
// console.log(movie)

// movie["cast"]='good one'
// console.log(movie)

// let colors = ['red', 'blue', 'black', 'purple'];
// console.log(colors[3]);
// colors[4]='70';
// console.log(colors);
// console.log(typeof(colors));

// colors.toString;

//compiler ignores falsy values
//null, false, undefined


var check ='check';
console.log(check + 5);

//comparison operator
// == --> loose equality
// === --> strict equality - it checks data type

let variable1 = 55;
let variable2 = '55';

if (variable1 == variable2){
    console.log('what kind of name is that?');

}
else
    console.log('yes this is a proper one')

// currentUser.id === saved User.id && currnet.id === admin.id
// return authenticated return admin rights

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
//bitwise | OR
// bitwise & and

console.log( 1 | 2)
console.log( 1 & 2)

const readPermission = 4;
const writePermission = 2;
const executePermission =1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission; // assign permissions

// check permissions
let message= (myPermission & readPermission) ? 'yes' : 'no'; //turnery statement
console.log(message);

//=====================================
// 01-18-2021

// functions -->if else

let hour = 15;
if (hour >= 6 && hour <12){
    console.log('good morning')
}
else if (hour >=12 && hour <18){
    console.log('good afternoon')
}
else 
    console.log('good night')

// switch case
let role = 'admin';

// switch (role){
//     case 'user':{
//         console.log('Its a user')
//     }
//     break;

//     case 'admin':{
//         console.log('is an admin')
//     }
//     break;

//     default:
//         console.log('invalid user')
// }

if (role == 'user'){
    console.log('it is a user')
}
else if (role == 'admin'){
    console.log('its an admin')
}
else 
    console.log('its invalid user')

// for loops
let i=0;
// console.log(i);

// for (let i=7; i>0; i--){
//     //console.log('count', i)
//     if (i%2 !==0)
//     console.log(i);
// }

// while (i<=7){
//     if (i%2 !==0)
//     console.log(i);
//     i++;
// }

// do{
//     //if (i%2 !==0)
//     console.log(i);
//     i++;
// }
// while (i<=7)


// for - in use for object
const movie ={
    name: 'the shining',
    director: 'kubrick',
    rating: 9.8
}

for (let key in movie)
    console.log(key, ': ', movie[key]);


// using array
// for-in also pick index

    let colors = ['red', 'blue', 'black', 'purple'];

for (let key in colors)
    console.log(key, colors[key])

// for - of (use for arrays)
for (let color of colors)
    console.log(color)

//=========================
// 01-19-2021

function showProps (obj){
    for (let key in obj){
        if(typeof obj [key] == 'string')
        console.log(key,obj[key]);
    }
}

showProps(movie);

// write function for two numbers and return maximum number

let number = maxofTwo(2,3)
console.log(number)

function maxofTwo(a,b){
    // if(a>b)
    // return a;
    // else return b;
    return (a>b) ? a :b;
    
}

//function isLandscape

let lw = isLandscape(2,4)
console.log(lw)

function isLandscape(l,w){
    return (l>w) ? 'portrait' : 'landscape'
}
// falsy: 0, null, undefined, false, 
// print truthy
// const name1 = 'sarim'
// if(name1)
// console.log('hellooo')

const array =[0, null, 'ali', undefined, '', false, true, 43]
console.log(countTruthy(array));

function countTruthy(arr){
    let  count =0;
    
    for(let value of arr){
        if(value)
        count++
        
    }
    return count;
}

// fizzbuzz problem: 
// divisible by 3 --> fizz
// divisible by 5 --> buzz
// divisible by 3 and 5 --> fizzbuzz




hello()

let output = fizzBuzz(5);
console.log(output)

//=============================
// 01-22-2021

let radius = 1;
let x=2;
let y=7;

//object oriented programming OOP
/* DEFINE FUNCTION */
// const circle ={ // create object circle
//     radius:1,
//     location: {
//         x:2,
//         y:7,
//     },
//     isVisible: true,
//     draw : function (){
//         console.log("draw function")
//     }
// };

//circle.draw(); //call function outside object --> called methods
//console.log(circle);

/* CREATING OBJECTS */
// factory function
// constructor function

// FACTORY

function createCircle(r){
    return{
    radius:r,
    location: {
        x:2,
        y:7,
    },
    isVisible: true,
    draw (){
        console.log("draw function")
    }
}
}

const circle = createCircle(1);
const hugeCircle = createCircle(10);
circle.color='yellow';
delete circle.radius;

console.log('circle ', circle);
console.log('huge circle ', hugeCircle)

// Constructor function
function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw function');
    }
}

const anotherCircle = new Circle(3); 
const oneMoreCircle = new Circle(35);
/* NEW keywork behind the scene:
1) creates new (empty) object like const x={};
2) will make 'this' to point at empty object
3) returns the newly made object
*/
console.log('anotherCircle', anotherCircle);
console.log('oneMoreCircle', oneMoreCircle);

//+++++++++++++++++++++++++++++++++++++++
// 01-23-2021
//Make a 'blogPost' object with

const blogPost = {
    title:'question here',
    body:'answere here',
    author: 'who knows',
    views: 1,
    comments: {
        commentAuthor: 'expert',
        commentBody: 'your expert opinion here'
    }
}
console.log('blogPost' , blogPost);

function createAddress (stAddress, city, zipCode){
    return {streetAddress: stAddress,
    city: city,
    zipCode: zipCode,
    }
}

const factoryAddress1 = createAddress('MA Jinnah Rd', 'Karachi', '75550');
console.log(factoryAddress1)


function Address (stAddress, city, zipCode) {
    this.streetAddress = stAddress;
    this.city = city;
    this.zipcode = zipCode;
}

const address1 = new Address('Preston Rd', 'Plano', 75000);
const address2 = new Address('Hali Rd', 'Karachi', 76600);
console.log('Address1 ' , address1);
console.log('Address2 ', address2);
// const address = {
//     street : 'M A Jinnah Rd',
//     city : 'Karachi',
//     zipcode: '75550',
// }

// function showAddress (adress)  {  //defined function
//     for (let key in address) {
//         console.log(key, address[key])
//     }
// }
// showAddress (address) // call function


//functions are objects
console.log(Circle.length);
console.log(Circle.name);

// reference types: Object, array, function
//refrence vs value types

let x1 = 10;
let y1 = x1; //y1 did not reference x1 but copy x1 therefore changing x1 will not change y1

console.log('x1 ', x1, ' ', 'y1 ', y1);

x1=20;
console.log('x1 ', x1, ' ', 'y1 ', y1);

//value by reference
let x2 = {value: 10};
let y2 = x2;

x2.value = 20;
console.log('x2 ', x2, ' ', 'y2 ', y2);

//example function

//let number = new Number(23);

let number1 = {value:3};
function increase(num){
    num.value++;
}

increase(number1);
console.log(number);

//Enumerating an object
const circle1 ={ // create object circle
    radius:1,
    location: {
        x:2,
        y:7,
    },
    isVisible: true,
    draw : function (){
        console.log("draw function")
    }
};
//Method 1
for(let key in circle1){
    console.log(key, circle1[key]);
}

//Object.keys (values) vs. entries (show values and other information like data type)
//Method 2 using keys
for (let key of Object.keys(circle1)) //interesting in knowing keys
    console.log(key)
//Method 3 using entries
for (let key of Object.entries(circle1)) //interesting in knowing keys
    console.log(key)

if('color' in circle1){
    console.log('present');
}
else
    console.log('property not present')

//cloning

// const clone = {};
// for(let key in circle1){
//     clone[key] = circle1[key];
// }

// //clone.radius = circle1.radius;
// //clone.location = circle1.location

// console.log('clone', clone);



function Address1 (stAddress, city, zipCode) {
    this.streetAddress = stAddress;
    this.city = city;
    this.zipcode = zipCode;
}

let ads1 = new Address1('a', 'b', 'c');
let ads2 = new Address1('a', 'b', 'c');
let ads3 = ads1; //reference by location

//areEqual
//areSame --> is pointing at the same memory location



console.log(areEqual(ads1, ads2));

let outputOfSame = areSame(ads1, ads2)

console.log(areSame(ads1, ads3));

function BlogPost(title, body, author){
    this.title=title; 
    this.body=body;
    this.author=author;
    this.view=0;
    this.isLive= false;
    this.comments= [];
}

let blog1 = new BlogPost('JS', 'training', 'Ebrahim')
console.log(blog1);

blog1.addition ='this is addition';
console.log(blog1);


//============================01-26-2021=============

/*PRE BUILT JS OBJECTS */
// MATH JavaScript MDN

console.log(Math.round(1.3));

//Math is an object, round etc are its pre defined functions that take some parameter and return the result
console.log(Math.max(1,4,26,4,8,10,3));
console.log(Math.min(1,4,26,4,8,10,3));
console.log(Math.floor(2.5351));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//using javascript built in Math object, write a function that returns a random value

function randomValue(){
    return Math.random();
}

let v1 = randomValue();
console.log('value', v1);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


let upperlimit =70;
let lowerlimit = 50;

let choosen = getRandomArbitrary(lowerlimit, upperlimit)
console.log(choosen);
console.log(upperlimit);

//STRING/////

const message1 = 'hi its me';  //primitive data type- wrap by JS engine
//message = new String(message);
const another = new String('hi'); //string object

console.log('message1 ', typeof(message1));
console.log('another ', typeof(another));

console.log(message1.length)
console.log(message1[1])
console.log(message1.charAt(4))
console.log(message1.includes('hi'))
console.log(message1.startsWith('fish'))
console.log(message1.indexOf('i')) //index of first occurance
console.log(message1.replace('hi', 'hello'))
console.log(message1.toUpperCase())

console.log(message1.substring(3));
console.log(message.split(' ')); //extraction / manipulation
console.log(message1.trim(' ')); //extraction / cleanup


//========01-27-2021=========
//escape characters'\' 
// \n for new line
const mes = 'this is \n my \'first\' program';
console.log(mes);

//template literals
const name1 = 'Ali';
const template = `Hello${name1}

Thank you for joining us.

Best regards,`;
console.log(template);

//Date
const now = new Date(); //current date and time
console.log(now);
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.toDateString());
console.log(now.toISOString());

const myDate = new Date('March 01 2022 22:30');
console.log(myDate);
myDate.setFullYear(2025);
console.log(myDate);

//cloning and substring

const shape = {
    radius: 3,
    draw (){
        console.log('draw function');
    }
};
const clone = {}; //initialize
for (let key in shape){
    clone[key]=shape[key];
}console.log('cloning method 1', clone);

//1. Object.assign({receive}, {sending}) -->clones objects, combines
//2. Spread.operator {...} --> spread without using for loop

const clone1 =Object.assign({},shape); //1st parameter is the cloned one, 2ne is the original one
//first parameter could be an empty or alrready existing object
//second could be one or more objects
console.log('2nd method clone 1', clone1)

const another1 = Object.assign({color:'yellow'}, shape); //addition into an already existing object
//shape.color ='yellow';

console.log('another1', another1);

const triangle = {
    height: 4.5,
    angle: 'obtuse',
}

const multiClone = Object.assign({}, {circle, triangle}); //makes 2 subobjects named circle and triangle within 'multiclone'.
console.log('multiple clone', multiClone)
const mergeClone = Object.assign(circle, triangle);  //merging both objects -repeated properties are overwritten.
console.log('mergeClone', mergeClone)
//const booking = Object.assign ({}, {CaretPosition, payment Details});

//Spread Operator

const spreadClone = {...shape};
console.log('third method: spread operator', spreadClone)

/*create an object to hold information on your favorite recipe. 
It should have properties for title (a string), servings (a number), 
and ingredients (an array of strings). Print them.
*/

const recipe = {
    title: 'Biryani',
    serving: 4,
    ingredients: ['Rice', 'beef', 'salt', 'oil'],
}
console.log(recipe);

/*Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books.
Next, iterate and see if the book is read. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien‘’.
*/

var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];
for (let key in books){
    if (books[key].alreadyRead === true){
        console.log('you have read ', books[key].title)
    }
    else
        console.log('you have not read ', books[key].title)
}
console.log(books);

for (let key of books){
    if(key.alreadyRead === true)
    console.log('you have read '+ key.title)
    else
        console.log('you have not read ', key.title)
}

/* Write a function called cashRegister that takes a shopping cart object. The object contains item names 
and prices (itemName: itemPrice) e.g:
{banana: 3.4,
Eggs: 3.5}
The function should return the total price of the shopping cart.
*/

var cart = {
    Banana:3.5, 
    Eggs:3.8,
    Apple: 1.5,
    Carrot: 0.50,
    Bread: 1.89,
    Milk: 3.99
}
// if we have string instead of numbers
// 1. convert them into number --> PARSING
//2. add
function cashRegister (cart){
    let sum = 0;
    for (let key in cart) {
        //console.log(key, cart[key])
        sum = sum+cart[key]
        //sum += Number.parseFloat(cart[key])
    }
    return sum;
}

const totalAmount = cashRegister(cart)
console.log(totalAmount)



















