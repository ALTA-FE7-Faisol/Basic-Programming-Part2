function playWithAsterik(n) {
//   // Your Code Here
  let s="";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j>=i; j--) {
      s+=" ";
    }
    for (let k = 1; k <= i+(i-1); k++) {
      s+="*";
    }
    s+="\n";
  }
  return s;
}
console.log(playWithAsterik(5));

playWithAsterik(5);