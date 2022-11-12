let inputString =
    `2
    1 0 0
    0 1 1`;
let currentLine = 0;
inputString = inputString.split("\n")

function readline() {
    return inputString[currentLine++];
}

function main() {

    let linecount = parseInt(readline())
    let count = []
    for (let i = 0; i < linecount; i++) {
        count.push(readline().replace(/\s/g, '').split("").map((a) => parseInt(a)))
        count[i]= count[i][0]+count[i][1]+count[i][2] < 2 ? 0 : 1
        
    }
    let result = 0
    for (let i = 0; i < count.length; i++) {
        if (count[i] === 1) {
            result++
        }
    }
    console.log(result)
}
main()