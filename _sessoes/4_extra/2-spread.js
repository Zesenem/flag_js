let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [100, 'john', ...arr1, true, ...arr2, 200, 'doe'];
console.log('newArr:' , newArr);

// Copy by reference

let copyRef = arr1; // Copy by reference

console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

arr1.push(100);

console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

// Copy by value

let copyVal = [...arr1]; // Copy by value

console.log('arr1:', arr1);
console.log('copyVal:', copyVal);

copyVal.push(200);

console.log('arr1:', arr1);
console.log('copyVal:', copyVal);