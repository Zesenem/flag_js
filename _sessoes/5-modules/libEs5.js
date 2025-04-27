/// IIFE - Immediately Invoked Function Expression

// This is a common pattern in JavaScript to create a private scope
// and avoid polluting the global namespace.

/// Closure - A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.



let libEs5 = (function (){
    let nome = 'Antonio';

    let surname = 'Menezes';

    function sayHello() {
        return `Hello ${nome} ${surname}`
    }

    return {
        sayHello,
        nome,
        surname,
    }
})();

//console.log(libEs5.sayHello())

