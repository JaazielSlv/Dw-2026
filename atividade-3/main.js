import { check } from './lib.js';

console.log(check(2,2,2)); // equilatero
console.log(check(10,10,10)); // equilatero
console.log(check(3,4,4)); // isosceles
console.log(check(4,3,4)); // isosceles
console.log(check(4,4,3)); // isosceles
console.log(check(10,10,2)); // isosceles
console.log(check(3,4,5)); // escaleno
console.log(check(10,11,12)); // escaleno
console.log(check(5,4,2)); // escaleno
console.log(check(0,0,0)); // none
console.log(check(3,4,-5)); // none
console.log(check(1,1,3)); // none 
console.log(check(2,4,2)); // none