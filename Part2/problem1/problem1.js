// input
let studentScore = 80;

// Process: Your Solution Code Here
function finalScore(studentScore) {
    switch (true) {
        case studentScore>100:
            return("invalid");
        case studentScore>=80:
            return("Nilai A");
        case studentScore>=65:
            return("Nilai B+");
        case studentScore>=50:
            return("Nilai B");
        case studentScore>=35:
            return("Nilai C");
        case studentScore>=0:
            return("Nilai D");
        default:
            return("invalid");
}
}

console.log(finalScore(studentScore));

module.exports=finalScore;

// Output
// Nilai A
