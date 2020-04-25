let age = prompt('your age :'),
	x = Number(age);

switch (x) {
	case x < 18:
		alert(`Sorry, i can let you drive me`);
		break;

	case x === 18:
		alert(`Sorry, you can drive me but carefully`);
		break;

	default:
		alert(`yes, you can drive`);
}
