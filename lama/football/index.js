let inputString = 
`001001`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let players = readline()
    console.log(players.split("0000000").length > 1 || players.split("1111111").length > 1 ? "YES": "NO")
}
main()
