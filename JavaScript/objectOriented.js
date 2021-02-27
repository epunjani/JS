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

/*DESTRUCTURING*/
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










