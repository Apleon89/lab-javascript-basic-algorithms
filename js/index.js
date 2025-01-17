// Iteration 1: Names and Input
let hacker1 = "Alberto";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Tom-Tom";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (  hacker2.length > hacker1.length ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driverUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    driverUpperCase += " " + hacker1[i]
};
console.log(driverUpperCase.slice(1).toUpperCase());

let navigatorReverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    navigatorReverse += hacker2[i]
};
console.log(navigatorReverse);

// Bonus1

let longText = "et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tortor felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean aliquam tempor elit a accumsan. Nullam non tristique elit, sit amet et imperdiet orci. Sed mollis rhoncus felis, ac pretium arcu imperdiet et. Nulla feugiat tortor mi, id venenatis felis tincidunt quis. Nulla id luctus odio. Praesent commodo sed ex luctus condimentum. In et efficitur nunc, vitae ullamcorper sapien. Maecenas molestie, ante et gravida consequat, tellus tortor scelerisque tortor, nec accumsan ipsum nulla non est. Praesent quis augue at diam tempor sodales eget sit amet lacus."

let countWords = 0;
if (longText.length !== 0) {
    countWords ++
};
for (let i = 0; i < longText.length; i++) {
    if ( longText[i] === " ") {
        countWords ++
    }
};
if (longText[0] === " ") {
    countWords = countWords - 1
}
console.log(`number of words in the string is: ${countWords} `);

// 2nd part
let longTextNoSymbol = longText.replace(/[^a-z A-Z 0-9]+/g,' ');

console.log(longTextNoSymbol)

let countEt = 0;
if (longTextNoSymbol[0] + longTextNoSymbol[1] + longTextNoSymbol[2] === "et " ) {
    countEt ++
}

for (let i = 0; i < longTextNoSymbol.length; i++) {
    if ( longTextNoSymbol[i] + longTextNoSymbol[i+1] + longTextNoSymbol[i+2] + longTextNoSymbol[i+3] === " et ") {
        countEt ++
    }
};
console.log(countEt);


// Bonus2

