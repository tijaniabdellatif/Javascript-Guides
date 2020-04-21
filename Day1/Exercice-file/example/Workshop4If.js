let age = prompt('your age :'),
	x = Number(age);
if (x < 18) {
	alert(`Sorry, i can let you drive me`);
} else if (x === 18) {
	alert(`Sorry, you can drive me but carefully`);
} else {
	alert(`yes, you can drive`);
}
