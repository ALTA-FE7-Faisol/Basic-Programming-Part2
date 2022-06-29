// input
let studentScore = 80;

// Process: Your Solution Code Here
if (studentScore<=100) {
    if (studentScore>=0) {
        if (studentScore>=80) {
            console.log("A");
        }else if (studentScore>=65) {
            console.log("B+");
        } else if (studentScore>=50) {
            console.log("B");
        } else if (studentScore>=35) {
            console.log("C");
        } else {
           console.log("D"); 
        }   
    }else {
        console.log("invalid");
    }
}else {
    console.log("invalid");
}

// Output
// Nilai A
