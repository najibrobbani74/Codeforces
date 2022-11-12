let inputString = 
`5
1 2 4 3 3`;
let currentLine = 0;
inputString = inputString.split("\n")
 
function readline() {
  return inputString[currentLine++].replace("\r","");
}

function main() {
  let countgroup = parseInt(readline())
  let people = readline().split(" ").map((a,i,arr)=>{
    return (i>0?(parseInt(a))+parseInt(arr[i-1]):parseInt(a))
  })
  console.log(people)
  console.log(Math.ceil(people[people.length-1]/4))
}
main()
