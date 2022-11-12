let inputString = 
`helaaaaaalo`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++];
}

function main() {
    let hello = ["h","e","l","l","o"]
    let word = readline().toLowerCase().replace(/[^hello]/g,"").split("").map((a)=>{
        if (a == hello[0]) {
            hello.shift()
        }
    })

    console.log(hello.length === 0?"YES":"NO")
}
main()
