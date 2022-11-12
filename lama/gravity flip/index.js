let inputString = 
`4
3 2 1 2`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let countcube = readline()
    let numbers = readline().split(" ").map((a)=>parseInt(a)).sort((a,b)=>a-b).join(" ")
    console.log(numbers)
}
main()
