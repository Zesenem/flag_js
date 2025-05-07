let keepWord = true;

let promise = new Promise((resolve, reject) => {
    if (keepWord) {
        resolve("Promise resolved successfully!");
    }
    else {
        reject("Promise rejected!");
    }
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved after 2 seconds!");
    }, 2000);
}
);

promise2
 .then (val => console.log(val))
 .then (console.log("This will always run!"))
 .error (err => console.log(err))
 .then (() => console.log("This will always run too!"))
 .catch (err => console.log(err))
 .finally (() => console.log("This will always run too!"));