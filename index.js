const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf-8").split("\n");

const createMeasurementWindows = (rawData) => {
	const output = [];
	let lastWindowIndex = 2;

	while (lastWindowIndex <= rawData.length - 1) {
		const valueOne = +rawData[lastWindowIndex - 2];
		const valueTwo = +rawData[lastWindowIndex - 1];
		const valueThree = +rawData[lastWindowIndex];
		output.push(valueOne + valueTwo + valueThree);
		lastWindowIndex++;
	}
	return output;
};

const sonarSweep = (summedMeasurementWindows) => {
	let increaseCount = 0;

	summedMeasurementWindows.forEach((currentMeasurementSum, index) => {
		if (index > 0) {
			const prevMeasurementSum = summedMeasurementWindows[index - 1];
			if (currentMeasurementSum > prevMeasurementSum) {
				increaseCount += 1;
			}
		}
	});

	return increaseCount;
};

const summedWindows = createMeasurementWindows(data);
console.log(sonarSweep(summedWindows));

module.exports = { sonarSweep, createMeasurementWindows };
