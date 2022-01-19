let fruits = [`apple`, `pear`, `banana`, `kiwi`, `pineapple`];
console.log(fruits);

let treeTypes = [`snel hest`, 666, [`foo`, `woo`, `loo`]];
console.log(`type of 1: ${typeof(treeTypes[0])}`);
console.log(`type of 2: ${typeof(treeTypes[1])}`);
console.log(`type of 3: ${typeof(treeTypes[2])}`);

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
console.log(`animals innehåller ${animals.length} objekt`);
console.log(animals[0]);
console.log(animals[3]);
animals[1] = 'tiger';
console.log(`nu är det ${animals[1]} istället för hamster`);

let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);
console.log(c);

let d = [1,2,3,7,8,9];
let e = [4,5,6];
//d.splice(3, 0, e);
d.splice(3, 0, e[0], e[1], e[2]);
console.log(d);

let arr = ['a', 'b', 'c'];
let arrClone = arr;
console.log(arr);
console.log(arrClone);
console.log(`is arr equal to arrClone? ${arr == arrClone}`);