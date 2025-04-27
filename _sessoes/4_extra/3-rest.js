
xpto(1,2,3,4,5,6,7,8,9,10);
// Spread operator

function xpto(a,b,...args) {
    console.log('a:', a);
    console.log('b:', b);
    console.log('args:', args);
}