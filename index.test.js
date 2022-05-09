const fs = require("fs");
const sonarSweep = require("./index");
const testData = fs.readFileSync("./test-input.txt", "utf-8");

describe("sonar-sweep", () => {
	describe("two depth measurements", () => {
		it("if passed two numbers with the second value higher than the first, return 1 ", () => {
			const input = [1, 2];
			const actual = sonarSweep(input);
			expect(actual).toBe(1);
		});
		it("if passed two numbers with the second value lower than the first, return 0", () => {
			const input = [2, 1];
			const actual = sonarSweep(input);
			expect(actual).toBe(0);
		});
	});
	describe("more than two depth measurements", () => {
		it("if passed three numbers which increment in size, return count of increases (2)", () => {
			const input = [1, 2, 3];
			const actual = sonarSweep(input);
			expect(actual).toBe(2);
		});
		it("functionality maintains with larger input", () => {
			const input = testData.split("\n");
			const actual = sonarSweep(input);
			expect(actual).toBe(7);
		});
	});
});
