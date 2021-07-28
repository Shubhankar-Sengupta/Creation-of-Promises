
const fakeServerRequest = (url) => {
    return new Promise((resolve, reject) => { // it returns a Promise object each time the function is executed. It takes a callback which takes two parametrs by default
    //first is resolve that if the promise is resolved or // reject-the second one if the promise is rejected.
    // both params expect a callback as well and only one thing can happen at a time.
        const delay = Math.floor(Math.random()*4500) +500;
        setTimeout(() => {
            resolve(`Data for  ${url}`);
        }, delay)
    })

}

fakeServerRequest('services.com/api/page1')
.then((data)=> {
    console.log(data)

})
