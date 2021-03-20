//Sync code example

// function someFunc(){
//     console.log('we are in some function')
//     console.log('we are doing something')
// }
// console.log('start')
// someFunc();
// console.log('end')


//Async code
// console.log('start')

// setTimeout( () => {
//     console.log('We are in timeout')
// }, 4000 )


// const items = [1,2,3,4,5]

// items.forEach((item)=>{
//     console.log(item)
// })

// console.log('end')


// console.log('start')



// function loginUser(email,password,callback){
//     setTimeout(()=>{
//         console.log('now we have the email', email)
//         callback({userEmail: email})
//     }, 1000)
// }

// function getUserVideos(email,callback){
//     setTimeout(()=>{
//         callback(['video1','video2','video3'])
//     },1000)
// }


// const user = loginUser('abc@gmail.com', 'pass1234_',(user)=>{
    
//     //get the user
//     console.log('user', user)
//     //get the user's list of videos
//     getUserVideos(user.userEmail, (videos)=>{
//         console.log(videos)
//     })
// })

// console.log(user)
// console.log('end')

//USING PROMISES:

function loginUser(email,password){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log('now we have the email', email)
            resolve({userEmail: email})
        }, 1000)
    })
}

function getUserVideos(email){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(['video1','video2','video3'])
        },1000)
    })
}

const user = loginUser("abc@gmail.com","pass1234_")
            .then(user=> {
                getUserVideos(user.email)
                console.log(user)
            })



// const promise = new Promise((resolve, reject) =>{
//     setTimeout( () => {
//         reject(new Error('User not logged in'))
//         // console.log('got the user');
//         // resolve({user: 'abc@gmail.com'})
//     },3000)
// })

// promise.then(user => console.log('user through promise ', user))
//         .catch(err => console.log(err.message))


//              ASYNC AWAIT

// movePlayer(100, 'left')
//             .then(()=> movePlayer(400, 'straight'))
//             .then(()=> movePlayer(10, 'right'))
//             .then(()=> movePlayer(30, 'right'))
            

async function playerStart(){
    const firstMove = await(movePlayer(400, 'straight')); //pause
    const secondMove = await(movePlayer(10, 'Right')); // pause
    const thirdMove = await(movePlayer(30, 'Right')); // pause
}


//using promise
fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data=> console.log(data))


//converted async-await

async function fetchUsers() {
    //wait for a promise
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
} catch (error){
    console.log(error)
}

}

fetchUsers()

//Pnoe-mom problem
const isMomHappy = false; //act as action generator condition.  promise will generate based on this parameter

const WillIGetNewPhone = new Promise((resolve,reject) =>{ //server code
    if(isMomHappy){
        const phone = {
            brand: 'Samsung',
            model: 'S10',
            color: 'black'
        }

        resolve(phone)
    }
    else{
        const reason = new Error ('mom is not happy')
        reject(reason)
    }
});

const showOff = function(phone){ //server code
    const brag = `Hey, I got a new ${phone.color} ${phone.brand} ${phone.model}`
    return Promise.resolve (brag)
}

// const askMom = function(){    //linking different asynchronous functions to work together
//     WillIGetNewPhone
//     .then(showOff)
//     .then(fulfilled=>console.log(fulfilled))
//     .catch(err => console.log(err))
// }

async function askMom() { //better to use; less code and easy to use
    //wait for a promise
try{
    const resp = await WillIGetNewPhone
    const brag = await showOff(resp)
        console.log(brag)
} catch (error){
    console.log(error)
}

}

askMom();

// just another example

const movies = [
    {title: 'A new hope', desc: 'we will not write'},
    {title: 'another hope', desc: 'we will not write'},
    {title: 'Yet another', desc: 'we will not write'},
]

//fetching movies from the datastore 'movies'
function getMovies(){
    setTimeout( () => {
        movies.forEach(movie => console.log(movie))
    },1000)
}

//adding another movie to data source of movies
function createMovies(movie){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            movies.push(movie);
            const error = false;

            if(!error) resolve();
            else reject('Error: something went wront. Try again!')
        },2000)
    })
}

//async call to fetch movies function 'getMovies'
async function init(){
    await createMovies({title: 'Ahh now i am hopeless', desc: 'not gonna write'}) //if not 'await' then this will not come
     getMovies(); //this will not run until new movie instance is created //it will not run until new movie instance is created
}

init();







