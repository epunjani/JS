
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


/* 
1. a function displayUser that will make a call to fetchUser() to print all users from api
2. a function fetchUserIds that will return an array of all userIds.  Output -> [0,1,2,3...10]
3. fetchUserLocation that will return an array of objects, each object containing userId along with complete address object.
*/
//using promise
// fetch('https://jsonplaceholder.typicode.com/users')
//             .then(resp => resp.json())
//             .then(data=> console.log(data))


// //converted async-await

// async function fetchUsers() {
//     //wait for a promise
// try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     return (data)
// } catch (error){
//     console.log(error)
// }

// }
//  async function displayUser() {
//      const fetchedUsers = await fetchUsers()
//      console.log('All User Data ', fetchedUsers)
//      return fetchedUsers
//  }
// async function createUser(user){
//     const allUser = await fetchUsers()
//     allUser.push(user)
//     console.log(allUser)
// }

// async function newUser(){
//     await createUser({id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}})
    
// }

// newUser();

// async function fetchUserIds(){
//      const Users = await fetchUsers()
//      let UserIds = Users.map(key => {
//          return key.id
//      })
//      console.log('User Ids ', UserIds)
//  }

// fetchUserIds()

// async function fetchUserLocation(){
//     const Users = await fetchUsers()
//     let userLocation = Users.map(key => {
//         return {id: key.id, address: key.address}
//     })
//     console.log('User Location ', userLocation) 
//     return userLocation
// }

// fetchUserLocation()

/*Write a javascript code to convert coma-separated-values (CSV) to a 2D array
HINT: A new line indicates a new row in the array

example:
abc,def,ghi = [[abc],[def],[ghi]
stu,vww,xyz
jkl,mno,pqr

*/

// const data= '{"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","phone": "1-770-736-8031 x56442","website": "hildegard.org"}'

// console.log(data)
// console.log(JSON.parse(data));

// const parseCSV = (csvString) => csvString.split('\n').map(row => row.split(','));

// const csv= 
// `abc,def,ghi
//  stu,vww,xyz
//  jkl,mno,pqr`

// let convertedJSarray = parseCSV(csv)

// console.log(convertedJSarray)


/*      JSON        */

let superHeroes = `[
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
              "Radiation resistance",
              "Turning tiny",
              "Radiation blast"
            ]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      },
      {"name": "extra index"}
]`
 
//to JS object
let superHeroesJS = JSON.parse(superHeroes)
console.log('super hero JS Object', superHeroesJS)
//console.log('original json', superHeroes)

//Accessing
console.log(superHeroesJS[0].members[2].powers[3])

//extract out the names of super heroes in the squad
let allSuperHeroes = superHeroesJS[0].members;
console.log(allSuperHeroes)

const superNames = allSuperHeroes.map(hero => {
    return hero.name;
})
console.log('superNames ', superNames)

//A function to add another hero to the squad
const addNewHero = (addHero) =>{
    
    superHeroesJS[0].members.push(addHero);
    
console.log(superHeroesJS)
}

const newHero = addNewHero({
    "name": "Sponge Bob",
        "age": 1000000,
        "secretIdentity": "can hop mountains",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
});

addNewHero({
    "name": "Pat the Starfish",
        "age": 1000000,
        "secretIdentity": "can hop mountains",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
});

superHeroes = JSON.stringify(superHeroesJS)
console.log('SuperHeroes', superHeroes)

/*
    function removeHero
    use console.log to very that your function has recieved the correct hero

    function accepts an argument which is a hero object
    fucntion does the [logic]

    function returns updated superHeroesJS object

    SELECT the helo that you want to remove, let's kick "Madame Uppercut"
    function call: removeHero(HERO THAT THE IS KICKING OUT)
*/

function removeHero(hero){
    console.log(hero)
    superHeroesJS[0].members = superHeroesJS[0].members.filter (val => val.name !== 'Madame Uppercut');
    console.log('filter ', superHeroesJS)
} 

removeHero(superHeroesJS[0].members[1]);

//Poping the last hero
console.log('superHerosJS before pop ', superHeroesJS)
let popHero = superHeroesJS[0].members.pop()
console.log('superHerosJS after pop', popHero)













