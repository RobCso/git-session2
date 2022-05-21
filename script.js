var animals, verbs, nouns, adjectives;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


animals = ['dog', 'cat', 'horse', 'sheep'];
let element_animal = document.getElementById('animal');
element_animal.innerText = randomMember(animals);
verbs = ['saw', 'heard', 'washed', 'stopped'];
let element_verb = document.getElementById('verb');
element_verb.innerText = randomMember(verbs);
nouns = ['man', 'woman', 'boy', 'girl'];
let element_noun = document.getElementById('noun');
element_noun.innerText = randomMember(nouns);
adjectives = ['white', 'black', 'brown', 'spotted'];
let element_adjective = document.getElementById('adjective');
element_adjective.innerText = randomMember(adjectives);
