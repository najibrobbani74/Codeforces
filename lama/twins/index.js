let inputString =
    `20
2 1 2 2 2 1 1 2 1 2 2 1 1 1 1 2 1 1 1 1`;
let currentLine = 0;
inputString = inputString.split("\n")

function readline() {
    return inputString[currentLine++];
}

function main() {
    let coincount = parseInt(readline())
    let me = [0, 0]
    let bro = [0, 0]
    let jml = 0
    let coins = readline().split(" ").sort(function (a, b) {
        return b - a;
    }).map((a, i, arr) => {
        jml = jml + parseInt(a)
        return parseInt(a)
    })
    let half = (jml % 2) == 0? (jml / 2) : Math.floor(jml / 2)

    coins.map((b,i,arr)=>{
        if (me[0] <= half) {
            me[0] = me[0] + b
            me[1]++
        } else {
            bro[0] = bro[0] + b
            bro[0]++
        }
    })
    console.log(me[1])

}
main()
