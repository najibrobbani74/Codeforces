let inputString = 
`a+b=c`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let word =readline()
    console.log(!word.includes("H")?!word.includes("Q")?!word.includes("9")?true?"NO":"YES":"YES":"YES":"YES")
}
main()
