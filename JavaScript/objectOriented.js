/* You are making a book shop. 
Make an object inventory that has key-value pairs of title and price of multiple books.
Next, write two functions
inventoryValue to print the total value of inventory
priceForTitle that takes in a book title and returns its price.
*/

let inventory = [
    {title: 'Book1', price: 10},
    {title: 'Book2', price: 20},
    {title: 'Book3', price: 30},
    {title: 'Book4', price: 40},
]
//console.log(inventory)
// let inventoryValue = inventory.reduce((sum, book) => sum+book.price , 0) // arrow -> and fat arrow =>

// console.log(inventoryValue)

// function priceForTitle(title) {
//     return inventory.find(key => key.title === title).price
// }

//console.log(priceForTitle('Book2'))


function Bookshop(inventory){
    return {
        inventory, // no need to do this.inventory: inventory
        priceForTitle(title) { //no need to write function(title)
            return inventory.find(key => key.title === title).price
        },
        inventoryValue(){
            return inventory.reduce((sum, book) => sum+book.price , 0)
        }
    }
}

let NazimabadBranch = new Bookshop(inventory) //call by reference

console.log('Nazimabad Branch: ',NazimabadBranch)


let CanttBranch = new Bookshop([        //instantaneous create
    {Title: 'harry potter', price: 10},
    {Title: 'java', price: 5},
])
console.log('Cantt: ', CanttBranch)

let worthOfNazimabadStore = NazimabadBranch.inventoryValue();
console.log('inventory worth of Nazimabad store: ', worthOfNazimabadStore)
console.log('inventory worth of Cantt store: ', CanttBranch.inventoryValue())

console.log(NazimabadBranch.priceForTitle('Book1'));

/*DE STRUCTURING*/
var expense = {
    type: 'Wages',
    amount: '$45 USD',
}

// var type = expense.type;
// var amount = expense.amount;
// console.log(type,':',amount)

//ES6
const {type, amount} = expense; //makes a variable named type by extracting type (value) from expense object
//const {amount} = expense; 

console.log(type, amount);

//Write a function filesSummary that displays content of a file

// De structuring from objects
let savedFile = {
    name: "javescript",
    type: ".js",
    size: '0.5kb',
    created: '2/26/2021',
    lastModified: '2/27/2021'
}

//statement: the file javascrip.js is of size 0.5kb and was created on date 2/26/2021

function fileSummary({name, type, size, created}, {drive}){
    return `The file ${name}${type} is of size ${size} and was created on ${created}, in drive ${drive}`
}
let filePropoerties = fileSummary(savedFile, {drive: 'C'})
console.log(filePropoerties);

// De structuring from arrays

const companies = ['Google', 'Ford', 'Salesoft', 'Facebook']

const [company, company1, ...other] = companies;
console.log(company, company1, other)

//Destructuring from array of objects
const companiesObjectArray = [
    {Name: 'Google', location: 'NewYork'},
    {Name: 'Ford', location: 'Detroit'},
    {Name: 'Salesoft', location: 'Melbournne'},
    {Name: 'Facebook', location: 'San Francisco'}
]
console.log('ES5', companiesObjectArray[0].location)
const [{location}] = companiesObjectArray
console.log('ES6', location)

//De structuring from object of arrays
const Google = {
    offices : ['London', 'NewYork', 'SanFrancisco'],
    products: ['ads', 'maps', 'geolocatio', 'AI']
}
const {offices: [offices]} = Google;
console.log(offices);

//USE OF DESTRUCTURING

function signup ({username, password, email, dateOfBirth, city, country,postalcode}){
    ///create new user
    console.log('user', username, 'pass', password, 'email', email, 'DOB', dateOfBirth, 'city', city, 'country',  country, 'PC', postalcode)
}

//signup('myName', 'myPassword', 'myEmail@gmail.com', 'karachi', 'country');
//othercode
const user={
    email: 'myEmail@gmail.com',
    username: 'myName',
    dateOfBirth:'01/01/1999',
    password:'myPassword'
}

signup(user)

//JSON -> javascript object notation.  It is text based.

let jsonUser = {
    'email': 'myemail.com'
}
console.log('JSON', jsonUser)

let report = '{"fromCount":0,"toCount":220,"fromDate": "1980-01-01","toDate": "2020-01-01","employee":[],"labelName":[],"filterType":[],"labelType":["_doc"], "contentValue": "","isFilter":1,"filterLabel":["221-150" ,"221-151"],"filterEmployees":["products@globanetconsultingservices.onmicrosoft.com" ,"archivemailbox@globanetconsulting.com"],"filterDatasource":["msteams","bloomberg"]}'
let obj = JSON.parse(report)
console.log(obj);

//ARRAY DESTRUCTURING INTO AN OBJECT THROUGH MAP
const points = [
    [4,5],
    [10,1],
    [0,40]
]

const mapped = points.map( ([x,y]) => {
    return {x: x, y: y}
})
console.log(mapped)

// PROTOTYPE INHERITENCE
//Parent class
function Car(options){
    this.purpose = options.purpose
}

Car.prototype.drive = function (){
    return 'vroom';
}

const car = new Car({purpose: 'just a normal car pupose'})
console.log('car',car)
console.log(car.drive());

//child class
class Toyota extends Car{
    constructor(options){
        super(options)
    this.wheel = options.wheelCount;
    //Car.call(this, options)
    }
}


// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
const myToyota = new Toyota ({wheelCount: '4', purpose: 'Dail driver'})
console.log('myToyota', myToyota)
console.log('myToyota drive function: ', myToyota.drive())

/*Create a class person that has properties of first name and last name.
Your class also have a function of displayName. Use this to print a statement like 
"My name is (first name) (last name)" 
Create 2 instances of the class and call function on each
*/
//Add another property of age to your class and write a function of displayName in the similar fashion

class Person {
    constructor(person){
        this.firstName = person.firstN
        this.lastName = person.lastN
        this.age = person.age
    }
    displayName(){
        return 'my name is ' + this.firstName +' ' + this.lastName
    }
    displayAge(){
        return `my age is ${this.age}`
    }
}
const myPerson = new Person ({firstN: 'Affan', lastN: 'Punjani', age: 13})
console.log(myPerson.displayName())
console.log(myPerson.displayAge())

/*Create a class Polygon that has properties of name,height and width. 
Your class will also have 2 functions: sayName - prints statement like 
"Hey I am a (name of polygon)" getDimensions - My dimensions are
Create a class Square that extends Polygon and 
its constructor has same properties of name height and width.
Square class has a function getArea - prints area of square
*/

class Polygon{
    constructor(width, height){
        //this.name1 = name1
        this.height = height
        this.width = width
    }
    sayName(){
        return `Hey I am a polygon`
    }
    getDimentions(){
        return `My dimensions are ${this.height} x ${this.width}`
    }
}
const myPolygon = new Polygon ({height: 4, width: 5})
console.log(myPolygon.sayName())
console.log(myPolygon.getDimentions())

class Reactangle extends Polygon{
    constructor (width, height){
        super(width, height)
        // this.width = ReactAngle.width
        // this.height = ReactAngle.height
    }
    getArea(){
        return `Area is ${this.height*this.width}.`
    }
}
let myRA = new Reactangle (15, 22)
console.log(myRA.getArea())

/*Create a class Book that has properties of title and author. 
Create two novel instances of this class and log the output on screen.
Your class also have a function publicizeBook that prints statement 
like “___ book was written by renowned author ____”.

Call this function on both instance objects.
*/

class Book{
    constructor (BooK) {
        this.title = BooK.title
        this.author = BooK.author
    }
    publicizeBook(){
        return `${this.title} book was written by renowned author ${this.author}`
    }
}
let novel1 = new Book ({title: 'Harry Potter', author: 'Me'})
let novel2 = new Book ({title: 'Adv JS', author: 'You'})
console.log(novel1.publicizeBook())
console.log(novel2.publicizeBook())

/*Create a class Animal that has property of name and a function speak.
Speak function gives output “____ animal speaks”.
Create a class Dog that extends Animal class and overrides speak function to give output “____ dog barks”.
Instantiate from dog class to show overriding.

Animal (parent)
extends 1) dog & 2) lion
*/

class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log (`${this.name} animal speaks`)
    }
}
let animal1 = new Animal ('Chikoo')
animal1.speak()

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    speak(){
        return `${this.name} dog barks`
    }   
}
let dog = new Dog ('Hunter')
console.log(dog.speak())

class Lion extends Animal{
    constructor(name){
        super(name)

    }
    speak(){
        super.speak(); //making a call to parent class's function
        return `${this.name} roars`
    }
}

let simba = new Lion('Simba')
console.log(simba.speak())

//inheritence in built-in classes

class Queue extends Array{
    enqueue(e){
        super.push(e)
    }

    dequeue(){
        super.shift() //just like shift in Arrys
    }
}

let customer = new Queue();
customer.enqueue('A')
customer.enqueue('B')
customer.enqueue('C')

customer.dequeue();
console.log(customer)


