let inputString = 
`10 3`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let numbers = readline().split(" ").map((a)=>parseInt(a))
    let half = numbers[0] % 2 == 0 ? numbers[0] / 2 : Math.round(numbers[0]/2)
    let result = numbers[1]>half? 2 * (numbers[1]-half): (1+(2*(numbers[1]-1)))
    console.log(result)
}
main()
