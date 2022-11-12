let inputString = 
`3
3 -1 7
-5 2 -4
2 -1 -3`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    const countline = parseInt(readline())
    let vektor = []
    for (let i = 0; i < countline; i++) {
        vektor[i] = readline().split(" ").map((a,ind,arr)=>{
            a = parseInt(a)
            return (i>0?a+vektor[i-1][ind]:a)
        })
    }
    console.log(`${vektor[vektor.length-1]}` === `0,0,0`?"YES":"NO")
}
main()
