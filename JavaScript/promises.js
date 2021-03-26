
/*PROMISES IN JAVA SCRIPT
    STATUS RESPONSE CODES:
    INFORMATIONAL RESONSES (100-199)
    SUCCESSFUL REPONSES (200-299)
    CLIENT ERRORS (400-499) ERROR 404
    SERVER ERRORS (500-599)

3 STATES OF PROMISES
    UNRESOLVED
    RESOLVED => then (Callback)
    REJECTED => catch (callbacks)
*/

console.log('promises')

let myPromise = new Promise((resolve, reject) => {
    resolve();
}).then(     ()   => console.log('finally'))
    .then(     ()   => console.log('I was also ran'))
     .catch(    ()     => console.log('myBad'))

// promise = new Promise().then.catch
// https://329.45:4000/admin/access


// promise().then.catch().finally()

//Ajax request url - fetch().then()
const url = "https://jsonplaceholder.typicode.com/posts";

let postUrl=     'https://jsonplaceholder.typicode.com/posts'
let commentsUrl=    'https://jsonplaceholder.typicode.com/comments'
let albumUrl=   'https://jsonplaceholder.typicode.com/albums'
let photosUrl=  'https://jsonplaceholder.typicode.com/photos'

fetch(photosUrl)
    .then(response => response.json())
    .then(json => console.log(json))

//Example

const isMomHappy = false; //act as action generator condition.  promise will generate based on this parameter

const WillIGetNewPhone = new Promise((resolve,reject) =>{
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

const showOff = function(phone){
    const brag = `Hey, I got a new ${phone.color} ${phone.brand} ${phone.model}`
    return Promise.resolve (brag)
}

const askMom = function(){    //linking different asynchronous functions to work together
    WillIGetNewPhone
    .then(showOff)
    .then(fulfilled=>console.log(fulfilled))
    .catch(err => console.log(err))
}

askMom();








