let inputString = 
`tour`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
  let word = readline().replace(/[aiueoyAIUEOY]/g,"").toLowerCase().split("").map((a)=>a!="\r"?("."+a):"").join("")
  console.log(word)
}
main()
