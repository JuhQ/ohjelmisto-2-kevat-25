const votes = [];

const getCandidateCount = () =>
    Number(
        prompt('Kuinka monta tyyppiä?')
    );

const setCandidateData = (number) => {
  for (let i = 0; i < number; i++) {
    const name = prompt(`Name for it's "candidate" ${i + 1}:`);

    votes.push({name: name, votes: 0});
  }
};

/*
// kolme tapaa luoda funktio
const addVote = function() {
  return true
}

function addVote() {
  return true
}
const addVote = () => {
  return true
}
// arrow funktiossa voi return avainsanan jättää pois
const addVote = () => true
*/

function addVote(i) {
  if (votes[i]) {
    votes[i].votes += 100;
  }
}

function sortVotes() {
  votes.sort((a, b) => b.votes - a.votes);
}

function updateHTML() {
  const ul = document.querySelector('ul#root');

  let k = 0;
  while (k < votes.length) {
    const vote = votes[k];

    const li = document.createElement('li'); // <li></li>

    li.innerHTML = 'Nimi: ' + vote.name + ', votes: ' + vote.votes; // <li>Nimi: juha, votes: 0</li>

    ul.appendChild(li); // <ul><li>Nimi: juha, votes: 0</li></ul>
    k++;
  }
}

const numberOfCandidates = getCandidateCount();
setCandidateData(numberOfCandidates);
// TODO: tämä vaatii että votes arrayssa on kaksi alkiota
addVote(1);
sortVotes();
updateHTML();
