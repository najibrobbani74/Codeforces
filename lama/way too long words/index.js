"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
    console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on("end", () => {
    inputString = inputString.split("\n");
    main();
});
function readline() {
    return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
    let linecount = parseInt(readline())
    let kata = []
    for (let i = 0; i < linecount; i++) {
        kata.push(readline().replace(/\s/g, ''))
    }
    console.log(kata.map((a) => {
        if (a.length > 10) {
            return (a[0] + (a.length-2).toString() + a[a.length - 1])
        } else { return a }
    }).join("\n"))
}