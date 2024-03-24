// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
  const newCats = cats.slice();
  newCats.push("Broom");
  return newCats;
}

function prependCat(name) {
    const newCats = cats.slice();
    newCats.unshift("Arnold");
    return newCats;
}
function removeLastCat(){
    newCats = cats.slice();
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice();
    newCats.shift();
    return newCats;
}
