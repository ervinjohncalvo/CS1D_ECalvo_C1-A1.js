// Person 1
const student1 = {
    name: "Ervin john Calvo",
    birthdate: "April 3, 2006",
    birthplace: "Bio, Tagudin, Philippines 2714",
    address: "Borono, Tagudin, Ilocos Sur, Philippines 2714",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Mobile app developer"
};

// Person 2
const student2 = {
    name: "JEROME VENUS GIRAY",
    birthdate: "November 10, 2005",
    birthplace: "West Kamias, Quezon City, Metro Manila, Philippines 1102",
    address: "Paypayad, Candon City, Ilocos Sur, Philippines 2710.",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Game Developer"
};

// Person 3
const student3 = {
    name: "Janeen Tawagen Inigo",
    birthdate: "September 16 2006  ",
    birthplace: "Labut Lidlidda, Ilocos Sur 2723",
    address: "Labut Lidlidda, Ilocos Sur 2723",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Web Developer"
};

// Function to print formatted student info
function printStudentInfo(student) {
    console.log(
        `[${student.name.toUpperCase()}] was born [${student.birthdate}] at [${student.birthplace.toUpperCase()}], ` +
        `and currently living at [${student.address.toUpperCase()}]. [${student.name.toLowerCase()}] is taking up ` +
        `[${student.course.toLowerCase()}] and dreams to be [${student.dreamJob}] after graduation.\n`
    );
}

// Printing details for each persona
printStudentInfo(student1);
printStudentInfo(student2);
printStudentInfo(student3);