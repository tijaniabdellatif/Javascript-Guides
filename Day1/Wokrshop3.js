let x = Number(prompt('First number'));
let z = prompt('enter an operator (+ - * /)');
let y = Number(prompt('Second  number'));

switch (z) {
	case '+':
		z = x + y;
		alert('Result :' + ' ' + z);
		break;

	case '-':
		z = x - y;
		alert('Result :' + ' ' + z);
		break;

	case '*':
		z = x * y;
		alert('Result :' + ' ' + z);
		break;

	case '/':
		z = x / y;
		alert('Result :' + ' ' + z);
		break;
}
