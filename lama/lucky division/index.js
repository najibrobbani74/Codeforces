let inputString =
    `799`;
let currentLine = 0;
inputString = inputString.split("\n")

function readline() {
    return inputString[currentLine++];
}

function main() {
    let num = readline().replace("\r")
    let magic = [
        4,7,44,77,47,74,444,777,447,774,474,747,477,744
    ]
    let result = "NO"
    if (num.split(/[47]/).join("") == "" ) {
        console.log("YES")
    } else {
        magic.map((a)=>{
            if (parseInt(num)%a==0) {
              result = "YES" 
            }
        })
    }
    console.log(result)
}
main()
