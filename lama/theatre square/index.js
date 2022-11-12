let inputString = 
`12 13 4`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let cube = readline().split(" ").map((a)=>parseInt(a))
    let result = (cube[0]>cube[2]?Math.ceil(cube[0]/cube[2]):1) * (cube[1]>cube[2]?Math.ceil(cube[1]/cube[2]):1)
    console.log(result)
}
main()
