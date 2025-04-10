console.log("hello world")

const votes = []

const numberOfCandidates = Number(prompt("Kuinka monta tyyppiä?"))

console.log("numberOfCandidates", numberOfCandidates)
console.log({numberOfCandidates})

for (let i = 0; i < numberOfCandidates; i++) {
  //const name = prompt('Name for it\'s "candidate" ' + (i + 1) + ':')
  //const name = prompt("Name for it's \"candidate\" " + (i + 1) + ":")

  const name = prompt(`Name for it's "candidate" ${i + 1}:`)

  votes.push({ name: name, votes: 0 })
}

console.log("votes", votes)

votes[1].votes += 100

votes.sort((a,b) => b.votes - a.votes)

const ul = document.querySelector("ul#root")

let k = 0;
while (k < votes.length) {
  const vote = votes[k]

  const li = document.createElement("li") // <li></li>

  li.innerHTML = "Nimi: " + vote.name + ", votes: " + vote.votes // <li>Nimi: juha, votes: 0</li>

  //li.innerText = `Nimi: ${vote.name}, votes: ${vote.votes}`

  ul.appendChild(li) // <ul><li>Nimi: juha, votes: 0</li></ul>
  k++;
}


