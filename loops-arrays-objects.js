// ==========================================
// Opdracht 1a
// Write a script that prints the score (the number from the property "score") for each student in the array in the terminal

const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

for (let i=0; i <scores.length; i++){
    console.log(scores[i].score);
}

// Verwachtte uitkomsten:
// 83
// 77
// 92
// 66
// ==========================================





// ==========================================
// Opdracht 1b
// Expand your script by converting the score for each student into a letter and printing this in the terminal
// // < 60 = F, < 70 = D, <80 = C, <90 B, <100 = A
// // Make sure this would also work if the array contained 100 or 200 numbers!
// // Expected outcomes:
// B
// C
// A
// D
// ==========================================

for(let i=0; i<scores.length; i++){
    const studentScore =scores[i].score;
    if(studentScore >=90){
        scores[i].grade = 'A';
    }else if(studentScore<90 && studentScore >=80){
        scores[i].grade='B';
    }else if(studentScore <80 && studentScore >=70){
        scores[i].grade='C';
    }else if(studentScore<70 && studentScore>=60) {
        scores[i].grade = 'D'
    }else {
        scores[i].grade = 'F';
    }


}



// ==========================================
// Opdracht 1c
// Extend your script by storing the corresponding letter in the 'grade' property of each student object in the array.
// // Before the script you see the original objects,
// // After your script you will see the custom objects:
// // console.log(scores) returns: [
// // { name: 'Max', score: 83, grade: 'B' },
// // { name: 'David', score: 77, grade: 'C' },
// // { name: 'Khalid', score: 92, grade: 'A' }
// // { name: 'Rianne', score: 66, grade: 'D' }
// // ];
// ==========================================




for(let i=0; i<scores.length; i++){
    const studentScore =scores[i].score;
    const name = scores[i].name

    if(studentScore >=90){
        scores[i].grade = 'A';
    }else if(studentScore<90 && studentScore >=80){
        scores[i].grade='B';
    }else if(studentScore <80 && studentScore >=70){
        scores[i].grade='C';
    }else if(studentScore<70 && studentScore>=60) {
        scores[i].grade = 'D'
    }else {
        scores[i].grade = 'F';
    }

    console.log('name: ' + name + ', score: ' + studentScore + ', grade: ' + scores[i].grade);
}


// ==========================================
// Opdracht 2
// Write a script that generates email addresses for all our employees. Save this in a new property "email" that you add to each employee.

const NOVIEmployees = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];
for (let i=0; i< NOVIEmployees.length; i++) {
  const employee = NOVIEmployees[i];
  const email = employee.firstName.toLowerCase() + '.' + employee.lastName.toLowerCase() + '@NOVI.nl';
  employee.email= email;
  console.log(NOVIEmployees);
}
// Bij NOVI horen de e-mailadressen altijd in het volgende format: voornaam.achternaam@novi.nl
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(NOVIEmployees) geeft: [
//   { firstName: 'Nova', lastName: 'Eeken', email: 'Nova.Eeken@novi.nl' },
//   { firstName: 'Sam', lastName: 'Barnhoorn', email: 'Sam.Barnhoorn@novi.nl' },
//   { firstName: 'Tessa', lastName: 'Steur', email: 'Tessa.Steur@novi.nl' },
//   { firstName: 'Mark', lastName: 'Rensen', email: 'Mark.Rensen@novi.nl' },
//  ];
// ==========================================






// Opdracht 2-BONUS
// Lukt het je om ervoor te zorgen dat alle e-mailadressen in lowercase letters komen te staan? Dit heb je nog niet geleerd, maar google is your best friend...
// ==========================================


// .toLowerCase

// ==========================================
// Opdracht 3
// Write a script that populates the property "neighborhood" based on the zip code of our students.
// // Tip: is it useful to use if-else here, or is there perhaps a better way?
// 	3513 = Pijlsweerd
//  3514 = Vogelenbuurt
//  3512 = Binnenstad
//  3531 = Lombok
//  3572 = Wittevrouwen
//  3581 = Oudwijk
//  3583 = Schildersbuurt

const students = [
    {name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: null},
    {name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: null},
    {name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: null},
    {name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: null},
];

const zipCodeMappings = {
    '3513': 'Pijlsweerd',
    '3514' : 'Vogelenbuurt',
    '3572' : 'Vogelenbuurt',
    '3581' : 'Vogelenbuurt',
    '3512' : 'Vogelenbuurt',
    '3583' : 'Vogelenbuurt',
    '3531' : 'Vogelenbuurt',

}

for(let i=0; i <students.length; i++) {
const studentZipCode = students[i].zipCode
    const neighborhood = zipCodeMappings[studentZipCode];
students[i].neighborhood = neighborhood;
console.log(students);
}



// Verwachte uitkomsten:
// [
//     { name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: 'Vogelenbuurt' },
//     { name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: 'Vogelenbuurt' },
//     { name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: 'Vogelenbuurt' },
//     { name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: 'Vogelenbuurt' },
//     { name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: 'Vogelenbuurt' },
//     { name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: 'Vogelenbuurt' },
//     { name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: 'Vogelenbuurt' },
//     { name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: 'Vogelenbuurt' }
// ]
// ==========================================



