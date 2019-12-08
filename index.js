const points = document.getElementById('points');
const calc = document.getElementById('calc');
const startRange = document.getElementById('startRange');
const endRange = document.getElementById('endRange');
const res = document.getElementById('res');

const sin = Math.sin;
const cos = Math.cos;
const ln = Math.log;

calc.addEventListener('click', () => {
	// let func = funct.value ? evalee : x => ((x ** 3 + sin(x / 4)) / (x ** 2 + x + 10));
	// let func = x => ((x ** 2 + cos(x / 7)) / (x ** 5 + x + 25));
	let func = x => (1 / ln(x));
	let intervalBegin = startRange.value ? +startRange.value : 2;
	let intervalEnd = endRange.value ? +endRange.value : 5;
	let iterations = points.value ? +points.value : 100000;
	let step = (intervalEnd - intervalBegin) / iterations;
	let integral = 0;
	for (let i = 1; i <= iterations; i++) {
		integral += step * func(intervalBegin + (i - 1) * step)
	}
	res.innerHTML = `Integral is equal to: ${integral}`;
	console.log(`Integral is equal to: ${integral}`);
});
