let people = {
    "oussama": 30,
    "otman": 60,
    "ayoub": 26,
    "amin": 15,
   "karim": 4}
            
function getMinor(people){
  const arr = [],
  minors = Object.keys(people);
  for (var x in minors){
    if(people[minors[x]] < 18 ){
      arr.push(minors[x]);
    }
  }
  return arr;
}

console.log(getMinor(people))

// console.log(Object.getOwnPropertyNames(people).filter(prop => veg[prop] > 5));
