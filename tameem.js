// Ek variable name bna aur apna naam daal, fir console.log() se print kar.

// Ek variable age bna aur prompt() se user se age le, fir console.info() se dikhana.

// const pi = 3.14; likh aur try kar pi ki value badalne — dekh kya error aata hai.

// console.warn("Yeh warning hai!") aur console.error("Yeh error hai!") likh ke output dekh.

// Ek variable me "Tameem" daal aur typeof se check kar wo kis type ka data hai.

// null aur undefined ko console me alag-alag print kar aur dekh difference kya hota hai.

// Ek variable me koi number daal aur isNaN() se check kar wo number hai ya NaN.




// level 1  Q1
let name = "tameem";
console.log(name);




// level 1  Q2
let myAge = prompt("meri age ky hai");
console.info("meri age " + myAge);



// level 1  Q3
const pi = 3.14;
console.info(pi);
// const pi = 22/7;
// pi already has been declared error ara h



// level 1  Q4
let warning = "ye warning hai ";
console.warn(warning);
let error = "ye error h bhai tameem ";
console.error(error);



// level 1  Q5
let tam = "tameem akhtar";
console.log(typeof (tam));



// level 1  Q6
let nul = null;
console.log(nul);
let t;
console.log(t);



// level 1  Q7
let num = 99;
console.log(isNaN(num));



// Ek string "Hello JavaScript" me se "Java" nikalne ke liye .slice() use kar.

// "I love Python" string me "Python" ko "JavaScript" se .replace() karke print kar.

// Ek string me check kar "Script" word include hai ya nahi .includes() se.

// Ek string "apple,banana,orange" ko .split() karke array me convert kar.

// Ek array ["red","green","blue"] bna aur uska second element print kar.

// Us array me "yellow" color add kar aur fir pura array print kar.

// Ek function likh jo kisi bhi array ki length return kare.



// level 2  Q1
let str1 = "hello javascript";
console.log(str1.slice(5, 10));



// level 2  Q2
let str2 = "i love python";
console.log(str2.replace("python", "javascript"))



// level 2  Q3
let str3 = "i m learning javascript";
console.log(str3.includes("javascript"));



// level 2  Q4
let str4 = "apple ,banana,mango,ilaichi";
console.log(str4.split());



// level 2  Q5
let str5 = ["red", "green", "blue"];
console.log(str5[1]);




// level 2  Q6
str5.push("yellow");
console.log(str5);
// function ni pda hu bhai



// Ek object student bna jisme name, age, course keys ho. console.log() se print kar.

// Ek function likh jo do numbers ko add karke return kare.

// Ek function likh jo user se naam le (prompt se) aur alert kare:
// 👉 “Hello [user ka naam], welcome to JavaScript!”

// Ek array of objects bna, jisme 3 students ke name aur marks ho, aur sabko console me print kar.

// Ek function likh jo check kare ki number even hai ya odd.

// Ek array me se sabhi elements ko loop (for ya for-of) se print kar.

// Ek string "JavaScript" ko reverse karne ka code likh (split → reverse → join use karke).




// level 3  Q1
let obj1 = {
    name: "tameem",
    kitnesal: 18,
    course: "cohort 2"
};
console.log(obj1);



// level 3  Q2
// function mi pda hu bhai yrr



// level 3  Q3
// function mi pda hu bhai yrr



// level 3  Q4
let students = [
    {
        name: "rahil",
        marks: 75,
    },
    {
        name: "kaif",
        marks: 44,
    },
    {
        name: "maama",
        marks: 73,
    }
]
console.log(students);