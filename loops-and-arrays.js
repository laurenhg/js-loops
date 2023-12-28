// ==========================================
// Opdracht 1
// write a script that replaces each name in the array below with a pet name by appending -"je" after it.
// // Make sure this would also work if the array contained 100 or 200 names!
// ==========================================



// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


const names = ["Henk", "Piet", "Fred", "Joop"];
const petNames = []
for(let i = 0; i< names.length; i++){
   console.log(petNames [i] = names [i] + 'je');
}


// ==========================================
// Opdracht 2
// Write a script that multiplies every EVEN number in the array below by 2, and every ODD number by 3
// // Make sure this would also work if the array contained 100 or 200 numbers!
// ==========================================

const numbers = [2, 4, 5, 29, 38];
const evenNumbers =[]
const oddNumbers = []
for(let i =0; i< numbers.length;  i++) {
   if (numbers[i] % 2 === 0) {
      console.log(evenNumbers [i] = numbers[i] * 2);
   }else if(numbers[i] % 2 !==0){
   console.log(oddNumbers [i] = numbers [i] *3);
   }
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];



// ==========================================
// Opdracht 3
// Write a script that calculates the volume for the size of each square in the array below.
// // The volume of a square is Length x Width x Height
// // Then the current value in the array must be overwritten with: "The volume of [a] is [b]"
// // Make sure this would also work if the array contained 100 or 200 numbers!



const squares = [30, 2, 8, 24, 11];
for(let i=0; i<squares.length; i++) {
  const cube =  squares[i] * squares[i] * squares [i]
console.log('The volume of ' + squares[i] + ' is ' + cube);

}
// Expected outcomes:
// // Before the script you see the original values:
// // console.log(squares) returns: [30, 2, 8, 24, 11];
// // After your script you will see the adjusted values:
// // console.log(squares) returns:
// // [
// // 'The volume of 30 is 27000',
// // 'The volume of 2 is 8',
// // 'The volume of 8 is 512',
// // 'The volume of 24 is 13824',
// // 'The volume of 11 is 1331'
// // ]



