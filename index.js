// const funct = document.getElementById('function');
const calc = document.getElementById('calc');
const startRange = document.getElementById('startRange');
const endRange = document.getElementById('endRange');
const res = document.getElementById('res');

const sin = Math.sin;
const cos = Math.cos;

calc.addEventListener('click', () => {
	// let func = funct.value ? evalee : x => ((x ** 3 + sin(x / 4)) / (x ** 2 + x + 10));
	let func = x => ((x ** 2 + cos(x / 7)) / (x ** 5 + x + 25));
	let intervalBegin = startRange.value ? +startRange.value : 0;
	let intervalEnd = endRange.value ? +endRange.value : 1;
	let iterations = 1000000;
	let step = (intervalEnd - intervalBegin) / iterations
	let integral = 0
	for (let i = 0; i < iterations; i++) {
		integral += step * func(intervalBegin + (i - 1) * step);
	}
	res.innerHTML = `Integral is equal to: ${integral}`;
	console.log(`Integral is equal to: ${integral}`);
});
