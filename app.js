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
            if (delay > 4000) {
                reject('Connection Timeout :(')
            }
            resolve(`Data for  ${url}`);
        }, delay)
    })  //resolve and reject are two functions either of which on any point of time gets executed inside the Promise() callback.

}


// fakeServerRequest('services.com/api/page1')
//     .then((data) => {
//         console.log(data)
//     })



// async function RequestAPI() { // awaits can only be used insdie async functions.

//     try {
//         let data = await fakeServerRequest('/page1') // we can store it in a variable or just be with await.
//         console.log(data)
//         let data1 = await fakeServerRequest('/page2')
//         console.log(data1)
//         return "Donee!!!"
//     }

//     catch (err) { console.log('Something went wrong', err) }

// }

// RequestAPI()

// RequestAPI().catch((err) => console.log('Something went wrong', err)); // to catch the error and resolve it.


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


// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//             document.body.style.backgroundColor = color;
//         }, delay)
//     })
// }


// delayedColorChange('red', 1000) // once resolve the then() method callback hence gets executed. then() is a method on the new promise object that is returned everytime when delayedColorChange function is invoked.  
// .then(() => delayedColorChange('green', 1000))
// .then(() => delayedColorChange('orange', 1000))


// let delay = 0;

// const delayedColorChange = function (color) {
//     delay += 1000
//     if (color === '') throw "Not the expected color";
//     return async () => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//         }, delay)
//     }

// }


// delayedColorChange('violet')()
//     .then(() => delayedColorChange('green')())
//     .then(() => delayedColorChange('yellow')())
//     .then(() => delayedColorChange('orange')())
//     .then(() => delayedColorChange('lawngreen')())
//     .then(() => delayedColorChange('brown')())
//     .then(() => delayedColorChange('blue')())


// // async functions by default return an object with a state of fulfilled when not returned with any value. 

// async function great1() {
//     throw "Oh no error" // now it is rejected with error the magical promise object
//     return "Welcome"
// }



// great1()
//     .then(() => console.log('Hello'))
//     .catch(() => console.log('Oh no Error encountered')) // this method on the promise object only runs when the promise is rejected.


// async function great() { // automatically returns an error
//     return "Hello" // here the promise is fulfilled with the value of Hello which is returned from the async function.
// }

// async function god() { // here the status is always resolved within async functions unless you throw an error.
// }



// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => { //returns a new promise object which has methods like then() if resolved else catch() if rejected.
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })

// }


// async function NewColor() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('green', 1000)
//     return "Done"
// }

// NewColor()

//check if user has left the page or is watching a cat video. If not, he
//wants to Subscribe to your channel

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'Hes watching a cat meme',
//                 message: 'He really loves cats'
//             })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise()
//     .then((success) => {
//         console.log(success)
//     })
//     .catch((failure) => {
//         console.log(failure.name, failure.message)
//     })

const userLeft = false
const userWatchingCatMeme = true


async function watchTutorial() {

    const user = {
        name: '',
        message: ''
    }

    if (userLeft) {
        user.name = 'User Left', user.message = ':(';
        return `${user.name} and ${user.message}`
    }

    else if (userWatchingCatMeme) {
        user.name = 'Hes watching a cat meme', user.message = 'He really loves cats';
        return `${user.name} and ${user.message}`
    }

    else {
        return 'Thumbs up and Subscribe'
    }
}


watchTutorial()


async function Login(username, password) {
    if (!username || !password) throw 'Missing Credentials';
    if (password !== 'Londa') throw 'Invalid credentials';
    else return "Great match Login done! Welcome"
}

Login("Londa")
    .then(data => console.log(data))
    .catch(err => console.log(err));




function delayedColorChange(color, delay) {
    return new Promise((resolve, reject) => { // resolve is a function which when runs returns a resolved promise. // promise is either rejected or resolved. Here it is always resolved. 
        setTimeout(() => { //resolve is a function with which the Promise is resolved.
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}



async function newColor() {
    await delayedColorChange('red', 1000)  // await stops the function execution and waits till this promise is resolved and then it moves to the next line of code.
    await delayedColorChange('green', 1000)
    return "Done"; //this function is resolved with a returned value of 'done'.
}

newColor()