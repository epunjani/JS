
/*PROMISES IN JAVA SCRIPT
    STATUS RESPONSE CODES:
    INFORMATIONAL RESONSES (100-199)
    SUCCESSFUL REPONSES (200-299)
    CLIENT ERRORS (400-499) ERROR 404
    SERVER WRRORS (500-599)

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















