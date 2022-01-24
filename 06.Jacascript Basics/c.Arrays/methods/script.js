let fruits = ['kiwi', 'apple', 'pear'];

// Lägg till en frukt i slutet av arrayen ovan.
fruits.push('lemon'); // Add att the end

// Lägg till en frukt i början av arrayen ovan.
fruits.unshift('melon'); // Add at the beginning

// I arrayen ovan, ta bort sista frukten i arrayen.
fruits.pop();

// I arrayen ovan, ta bort första frukten i arrayen.
fruits.shift();

// Sätt in en frukt i arrayen ovan på index 1.
fruits.splice(1, 0, 'tomato');

//Sätt in tre frukter i arrayen ovan på index 2.
fruits.splice(2, 0, 'banana', 'peach', 'mango');

console.log(fruits);


let names = ['David', 'Christoffer', 'Johan', 'Maja'];

// I arrayen ovan, ta bort Christoffer och Johan.
names.splice(1, 2);

console.log(names);


let nums = [1,2,3,4,5,6,7,8,9];

// Spegelvänd på arrayen ovan.
nums.reverse(nums);

console.log(nums);


let str = 'Supercalifragilisticexpialidocious';

// Kika om strängen ovan innehåller bokstaven n.
console.log(str.includes('n'));

// Kika om strängen ovan innehåller bokstaven x.
console.log(str.includes('x'));

// I ovanstående array, hitta vilket position första förekomsten av p har.
console.log(str.indexOf('p'));

// I strängen ovan, plocka fram de 5 första tecknena.
console.log(str.slice(0, 5));

// I strängen ovan, plocka fram de 7 sista tecknena.
console.log(str.slice(str.length-7));

console.log(str);