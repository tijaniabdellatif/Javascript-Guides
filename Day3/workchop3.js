// with a given Object containing the name and age as proprety

// Make a function that return the teenager person Among them.

// hints

// people({
//   amine: 71,
//   hamid: 45,
//   salim: 15,
//   karim: 29
// }) ➞ "salim"

function AmongPeople() {
	let people = { amine: 71, hamid: 45, salim: 15, karim: 29 };

	for (const A in people) {
		if (people.hasOwnProperty(A)) {
			Among = people[A] < 18;
			console.log(`The Among is : ${Among}`);
		}
	}
}

AmongPeople();

/*  2 The Among is : false
    The Among is : true
    The Among is : false   */
