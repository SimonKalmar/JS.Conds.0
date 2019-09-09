use 'strict';

function addVat(a) {
	return (a * 0.25) + a
}

function subVat(a) {
	return a - (a * 0.20)
}

function calcVat(a) {
	return (a * 0.20)
}

a = Number(prompt('Enter the price'));



console.log(addVat(a));
console.log(subVat(a));
console.log(calcVat(a));