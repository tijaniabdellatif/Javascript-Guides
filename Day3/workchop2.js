// Create a function that determines whether an order is eligible for free shipping.
// the condition is :
// if(total > 50)
// {
//   feel free to shop
// }
// hints

// free(
//   { "tomate": 5.99, "thon": 15.99 }
//   ) ➞ false

// free(
//   { "Monopoly": 11.99, "parshi": 35.99, "dadossa": 13.99 }
//   ) ➞ true

// try to use the loop for(const key in array)

function freeShipping(Purchases) {
	let sum = 0;
	for (const E in Purchases) {
		sum += Purchases[E];
	}
	if (sum > 50) {
		console.log(`The sum ${sum}$ > 50$ => free Shipping`);
	} else {
		console.log(`The sum ${sum}$ < 50$ => have't free Shipping`);
	}
}
freeShipping([ 11.9, 35.9, 13.9 ]);
