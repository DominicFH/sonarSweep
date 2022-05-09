const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf-8");

const inputData = data.split("\n");

const sonarSweep = (input) => {
	const numberfiedMeasurements = input.map((measurement) => {
		return +measurement;
	});

	let increaseCount = 0;
	numberfiedMeasurements.forEach((currentMeasurement, index) => {
		if (index > 0) {
			prevMeasurement = numberfiedMeasurements[index - 1];
			if (currentMeasurement > prevMeasurement) {
				increaseCount += 1;
			}
		}
	});
	return increaseCount;
};

module.exports = sonarSweep;
