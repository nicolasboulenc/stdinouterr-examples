
const fs = require('fs');
const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin, 
	output: process.stdout,
})

let fst = fs.fstatSync(0)
console.log(fst)

function ask(question) {
	rl.question(question, (answer) => {
		if(answer === "q") {
			process.exit(1)
		}
		rl.write(`The answer received:  ${answer}\n`)

		ask(question)
	})
}

ask("What is your name: ") 