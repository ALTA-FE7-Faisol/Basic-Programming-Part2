function playWithAsterik(n) {
//   // Your Code Here
let result = ""
for (let i = 1; i<=n; i++){
  let print = ""
  for (let j = 1; j<=n-i; j++){
      print += " "
  }
  for (let k = 1; k<=i; k++){
      print += "* "
  }
  if (i==n) {
    result+=print
  }else{
    result+=print+"\n"
  }
}
return result;
}
console.log(playWithAsterik(5));

module.exports=playWithAsterik;