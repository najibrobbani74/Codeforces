let inputString = 
``;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++].replace("\r","");
}

function main() {
  
}
main()
