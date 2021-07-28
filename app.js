// new Promise((resolve, reject)=> {
//     resolve();
// })

// new Promise((resolve, reject)=> {
//     reject();
// })

const fakeServerRequest = (url) => {
    return new Promise((resolve, reject) => { // it returns a Promise object each time the function is executed. It takes a callback which takes two parametrs by default
        //first is resolve that if the promise is resolved or // reject-the second one if the promise is rejected.
        // both params expect a callback as well and only one thing can happen at a time.
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            resolve(`Data for  ${url}`);
        }, delay)
    })  //resolve and reject are two functions either of which on any point of time gets executed inside the Promise() callback.

}

fakeServerRequest('services.com/api/page1')
    .then((data) => {
        console.log(data)
    })



// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => { //returns a new promise object which has methods like then() if resolved else catch() if rejected.
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })

// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('green', 1000)) // arrow functions within are returning this constantly.
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('violet', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('lawngreen', 1000))



// const hell = async function ne1() {
//     throw "Oh no!! error" // throw keyword as well stops the execution of function and is returned as the value.
//     return error
// }

// hell()

//Error --setTimeout doesn't return a Promise object hence then cannot be used.
// const delayedColorChange = async (color, delay) => {
//     return setTimeout(() => {
//         document.body.style.backgroundColor = color;
//     }, delay)
// }

// delayedColorChange('lawngreen', 1000)