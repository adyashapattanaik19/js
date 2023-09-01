function findMinMax() {
	let Arr = [50, 60, 20, 10, 40];
	let minValue = Infinity;
	let maxValue = -Infinity;

	for (let item of Arr) {

		
		if (item < minValue)
			minValue = item;

	
		if (item > maxValue)
			maxValue = item;
	}

	console.log("Minimum element is:" + minValue);
	console.log("Minimum element is:" + maxValue);
}

findMinMax();
