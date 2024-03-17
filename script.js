const makeChange = (c) => {
	const obj = [
		{value: 25, dollar: q},
		{value: 10, dollar: d},
		{value: 5, dollar: n},
		{value: 1, dollar: p}	
	];
	let change = {
		q: 0,
		d: 0,
		n: 0,
		p: 0
	}
	for (let i = 0; i < obj.length; i++) {
		while (c >= obj[i].value) {
			change[obj[i].dollar]++;
			c -= obj[i].value;
		}
	}
	return change;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));

