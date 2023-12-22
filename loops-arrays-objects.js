// ==========================================
// Opdracht 1a
// Write a script that prints the score (the number from the property "score") for each student in the array in the terminal

const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

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





// ==========================================
// Opdracht 1c
// Extend your script by storing the corresponding letter in the 'grade' property of each student object in the array.
// // Before the script you see the original objects,
// // After your script you will see the custom objects:
// // console.log(scores) returns: [
// // { name: 'Max', score: 83, grade: 'B' },
// // { name: 'David', score: 77, grade: 'C' },
// // { name: 'Khalid', score: 92, grade: 'A' },
// // { name: 'Rianne', score: 66, grade: 'D' }
// // ];
// ==========================================





// ==========================================
// Opdracht 2
// Write a script that generates email addresses for all our employees. Save this in a new property "email" that you add to each employee.

const NOVIEmployees = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];

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




// ==========================================
// Opdracht 3
// Schrijf een script die de property "neighborhood" (de buurt) invult op basis van de postcode van onze studenten.
// Tip: is het hier handig om if-else te gebruiken, of is er wellicht een betere manier?
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



