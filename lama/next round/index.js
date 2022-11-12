let inputString = 
`5 5
1 1 1 1 1`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let linecount = readline().split(" ").map((a)=>parseInt(a))
    let finisher = readline().split(" ").map((a)=>parseInt(a))
    let result = 0
    finisher.forEach((a)=>{
        if (a >= finisher[linecount[1]-1] && a !== 0) {
            result++
        }
    })
   
    console.log(result)
}
main()
