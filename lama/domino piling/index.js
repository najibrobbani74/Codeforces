let inputString = 
`2 4`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let board = readline().split(" ").map((a)=>parseInt(a))
    let result = Math.floor((board[0]*board[1])/2)
    console.log(result)
}
main()
