
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

/*Write a function named tellFortune that takes 4 arguments: 
number of children, partner's name, geographic location, job title. 
Outputs your fortune to the screen like so: "You will be a X in Y , 
and married to Z with N kids. Call that function 3 times with 3 different values for the arguments.
*/
function tellFortune(children, partner, geoLocation, jobTitle){
    return console.log("you will be ", jobTitle, "in ", geoLocation, " and married to ", partner, " with ", 
    children, " kids.")
}

tellFortune(2, 'Zaid', 'Islamabad', 'MD')
tellFortune(4, 'Aisha', 'Chicgo', 'PM')
tellFortune(1, 'Bob', 'LA', 'Housewife')

 /*Write a function named calculateDogAge that takes 1 argument: your puppy's age. 
 Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years. 
 Outputs the result to the screen like so: "Your doggie is NN years old in dog years! 
 Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
function calculateDogAge(Age, dogYear){
    let dogAge = Age*dogYear
    return console.log("Your doggie is ", dogAge, ' years old in dog years!')
}
calculateDogAge(5,7)

/*Create a function called calcCircumfrence. 
Pass the radius to the function. 
Calculate the circumference based on the radius, and 
output "The circumference is NN". 
Create a function called calcarean. Pass the radius to the function. 
Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumfrence(radius){
    let circumference = radius*2*3.14
    let area = (radius*radius)*3.14
    return console.log("The circumference is ", circumference, ". And area is ", area)
}

calcCircumfrence(2.5)

/*Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".

*/
function celsiusToFahrenheit(celsius){
    let fahrenheit = ((celsius * 9)/5) +32
    return console.log(celsius,"°C is ", fahrenheit, "°F")
}
celsiusToFahrenheit(-40)


/*You are clearing up your mailbox from Spam messages that can contain possible virus. Write a function virusInfected () that takes array of messages as parameter. Use a forEach loop to iterate the array and delete infected values. 

You can start with the following view of your inbox:

let spam = [ {messageBody: "Sucscribe to our newsletter", virus:true},
            {messageBody:"Lose weight fast", virus:false},
            {messageBody:"Fantastic scam, just click here", virus:true},
            {messageBody:"your computer has a virus. Fix it with us!!", virus:true}
    ]
*/
let spam = [ {messageBody: "Sucscribe to our newsletter", virus:true},
            {messageBody:"Lose weight fast", virus:false},
            {messageBody:"Fantastic scam, just click here", virus:true},
            {messageBody:"your computer has a virus. Fix it with us!!", virus:true}
    ]
function virusInfected(array){
    array.forEach((key) => {
        if (key.virus)
          array.splice(key.virus, 1)
  console.log(key.virus)
    }
);
}
virusInfected(spam)
console.log(spam)


/*You visit a showroom of cars and want to go over their price range blocks. 
Write a program that extracts the array of prices from data set of cars.

You can start with the following:

let cars = [ {model: “Honda civic", color: “navy blue”, price: “cheap”},
	{model: “Tesla", color: “navy blue”, price: “expensive”},
]
*/
let cars = [ {model: 'Honda civic', color: 'navy blue', price: 'cheap'},
	{model: 'Tesla', color: 'navy blue', price: 'expensive'},
]

let autoPrice = cars.map (key => {
    return key.price; 
}
)
console.log(autoPrice)

/*Write an array of officers. Each officer has an id, name and rank. 
You want to pass the IDs to other department to generate notifications. 
Write a program to extract only ids from officer array.
*/

let officers = [
    {id: 101, name: "John Blake", rank: "Detective"},
    {id: 102, name: "Bob Hunter", rank: "Inspector"},
    {id: 103, name: "Judy Smith", rank: "ODetective"}
]

let id = officers.map (key => {
    return key.id;
})

console.log(id)

/* You have a raw data set of all the inventory items on your store.
   Your responsibility is to segregate them based on their "type" for the website sections 
   such that your website has types:
                 fruits containing all fruits
                 accessories containing all accessories

    (ADD MORE VALUES IN YOUR inventory OBJECT FOR RICH RESULTS)
   */

var inventory =[
    {name:"orange", type:'fruit', qty: 200, price: 0.99},
    {name:"chair", type:'furniture', qty: 24, price: 99},
    {name:"cucumber", type:'vegetable', qty: 0, price: 0.50},
    {name:"table", type:'furniture', qty: 4, price: 199},
    {name:"necklace", type:'accessories', qty: 6, price: 49},
    {name:"perfume", type:'accessories', qty: 10, price: 75},
    {name:"mango", type:'fruit', qty: 40, price: 0.50},
]

const fruits = inventory.filter (val => val.type == 'fruit');
console.log('Fruits: ' ,fruits)
const accessories = inventory.filter(val => val.type == 'accessories')
console.log('accessories: ' ,accessories)
const vegetable = inventory.filter (val => val.type == 'vegetable');
console.log('vegetable: ' ,vegetable)
const furniture = inventory.filter(val => val.type == 'furniture')
console.log('furniture: ' ,furniture)

/* MAKE IT COMPLEX - add attributes "quantity" and price to each element in your inventory!!

Now, make a function/arrow function that shows vegetables on website that are not sold out
and the price range is less than 10 */

const filtered = vegetable.filter (val => {
    if(val.qty == 0 || val.price >=10)
    return console.log('Sold Out or out of range.')
    return val.qty > 0 && val.price <10;
    
}
    );
console.log(filtered)

//write a function commentsForPost that finds out all the comments for a specific post

let posts = {id: 4, title: "PSL"}

let comments = [
    {postid: 4, content: "PSL sucks"},
    {postid: 4, content: 'Atif Aslam has forgotten how to sing'},
    {postid: 5, content: "cool post"},
    {postid: 4, content: "beta parhlo"}
]

function commentsForPost (post, comments){
    return comments.filter (el => el.postid === post.id)
}

console.log(commentsForPost(posts, comments))





