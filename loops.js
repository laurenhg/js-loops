// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// // Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: you can use the .repeat() method to repeat a character n number of times...
// // You haven't learned this yet, but check out this MDN article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================

const symbol = '*'
for(let i=0; i<5; i++) {
    console.log(`${symbol.repeat(i+1)}`)
}


// ============Create a for-loop that logs the word "loop..." 4 times, and on the last (fifth) loop logs the word "done!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

for (let i = 0; i <= 4; i++) {
    if (i < 4) {
        console.log("loop...");
    } else {
        console.log("done!");
    }
}



// ==========================================
// Opdracht 3: create a for loop that goes from 0 to 9 and logs the numbers 0 to 9.
// // However, from number 3 onwards there will be a > in front of each number, and from number 6 onwards there will be >> in front of each number
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

for(let i=0; i<10; i++) {
    if (i <= 2) {
        console.log(i);
    }else if (i>=3 && i<6) {
     console.log('> ' + i);
    }else if (i>=6) {
        console.log('>> ' + i);
    }
}


// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================

for (let i=1; i<101; i++) {
    if (i % 15 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}

