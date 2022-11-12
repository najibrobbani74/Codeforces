"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++].replace("\r","");
}
 
// ********** Code Start **********

function main() {
  let num = readline().replace("\r")
  let magic = [
      4,7,44,77,47,74,444,777,447,774,474,747,477,744
  ]
  let result = "NO"
  if (num.split(/[47]/).join("") == "" ) {
      console.log("YES")
  } else {
      magic.map((a)=>{
          if (parseInt(num)%a==0) {
            result = "YES" 
          }
      })
  }
  console.log(result)
}