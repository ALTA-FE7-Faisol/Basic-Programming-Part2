// input
let studentScore = 80;

// Process: Your Solution Code Here
switch (true) {
    case studentScore>100:
        console.log("invalid");
        break
    case studentScore>=80:
        console.log("Nilai A");
        break;
    case studentScore>=65:
        console.log("Nilai B+");
        break
    case studentScore>=50:
        console.log("Nilai B");
        break
    case studentScore>=35:
        console.log("Nilai C");
        break
    case studentScore>=0:
        console.log("Nilai D");
        break
    default:
        console.log("invalid");
        break;
}

// Output
// Nilai A
