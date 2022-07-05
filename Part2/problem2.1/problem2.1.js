// input
let input1 = 6;
let input2 = 20;

// Your Code Here
function faktorBilangan(n) {
    let result="";
    for (let i = n; i >= 1; i--) {
        if (n%i===0) {
            result+=i+"\n";
        }
    }
    return result;
}
console.log(faktorBilangan(input1));
console.log(faktorBilangan(input2));

module.exports=faktorBilangan;