function sumMoney() {
	[
		{ name: 'amine', age: 21, budget: 15000 },
		{ name: 'hamid', age: 32, budget: 40000 },
		{ name: 'soufiane', age: 16, budget: 3500 }
	];

	let budget1 = sumMoney[0].budget;
	let budget2 = sumMoney[1].budget;
	let budget3 = sumMoney[2].budget;
	console.log(`Sum is : ` + (budget1 + budget2 + budget3));
	return;
}
sumMoney();
