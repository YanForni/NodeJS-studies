module.exports = function getFlag(string) {
    for (let i = 0; i < (process.argv).length; i++) {
        console.log(process.argv.indexOf(string));
        if (string === process.argv[i]) {
            return process.argv[(i+1)]
        }
    }
}


//outra possível solução para a função getFlag é:
// module.exports = getFlag;

// function getFlag(string) {
//     const index = process.argv.indexOf(string) + 1
//     return process.argv[index]
// }