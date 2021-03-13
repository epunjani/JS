
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