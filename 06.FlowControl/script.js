console.log(`=== A or B ===`);

let a = 10;
let b = 20;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

if(a > b) {
    console.log(`a is bigger than b`);
} else {
    console.log(`b is bigger than a`);
}


console.log(`=== C or D ===`);

let c = 'apple';
let d = 'pear';
console.log(`c: ${c}`);
console.log(`d: ${d}`);


if(c == d) {
    console.log(`c is equal to d`);
} else {
    console.log(`c is not equal to d`);
}

if(c !== d) {
    console.log(`c is different from d`);
} else {
    console.log(`c is not different from d`);
}


console.log(`=== biggest ===`);

let e = 20;
let f = 15;
console.log(`e: ${e}`);
console.log(`f: ${f}`);

if(e > f) {
    console.log(`e is the biggest number with the value of ${e}`);
} else if(e < f) {
    console.log(`f is the biggest number with the value of ${f}`);
} else {
    console.log(`e and f are equal with a value if ${e}`);
}


console.log(`=== even or not ===`);

let g = 5;
console.log(`g: ${g}`);

if(g % 2 == 0) {
    console.log(`g is even`);
} else {
    console.log(`g is odd`);
}


console.log(`=== lisebergsvakten ===`);

let h = 140;
console.log(`h: ${h}`);

if(h > 150) {
    console.log(`true`);
} else {
    console.log(`false`);
}


console.log(`=== lisebergsvakten 2 ===`);

let i = `platinum`;
console.log(`i: ${i}`);

if(i == `small` || i == `medium`) {
    console.log(`you can't go on Balder`);
} else if (i == `large` || i == `platinum`) {
    console.log(`you can go on Balder`);
}


console.log(`=== bmi ===`);

let j = 70; // kilo
let k = 1.60; // meter
console.log(`vikt: ${j}kg`);
console.log(`längd: ${k}m`);

let bmi = j / (k * 2)
console.log(`bmi: ${bmi}`);

if(bmi <= 18.5) {
    console.log(`you are underweight`);
} 
else if(bmi >= 18.5 && bmi < 25) {
    console.log(`your weight is normal`);
} 
else if(bmi >= 25 && bmi < 30) {
    console.log(`you are overweight`);
} 
else if(bmi >= 30) {
    console.log(`you are obese`);
}


console.log(`=== weekdays ===`);

let l = 4;
console.log(`l: ${l}`);

switch(l) {
    case 0:
        day = "måndag";
        break;
    case 1:
        day = "tisdag";
        break;
    case 2:
        day = "onsdag";
        break;
    case 3:
        day = "torsdag";
        break;
    case 4:
        day = "fredag";
        break;
    case 5:
        day = "lördag";
        break;
    case 7:
        day = "söndag";
        break;
    default:
        day = "false";
}

console.log(day);


console.log(`=== months ===`);

let m = 8;
console.log(`m: ${m}`);

switch(m) {
    case 0:
        month = "januari";
        break;
    case 1:
        month = "februari";
        break;
    case 2:
        month = "mars";
        break;
    case 3:
        month = "april";
        break;
    case 4:
        month = "maj";
        break;
    case 5:
        month = "juni";
        break;
    case 6:
        month = "juli";
        break;
    case 7:
        month = "augusti";
        break;
    case 8:
        month = "september";
        break;
    case 9:
        month = "oktober";
        break;
    case 10:
        month = "november";
        break;
    case 11:
        month = "december";
        break;
    default:
        month = "false";
}

console.log(month);