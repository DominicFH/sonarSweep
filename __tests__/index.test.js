const fs = require("fs");
const { sonarSweep, createMeasurementWindows } = require("../index");
const testData = fs.readFileSync("./__tests__/test-input.txt", "utf-8");

describe("sonar-sweep", () => {
	describe("challenge one", () => {
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
	describe("challenge two", () => {
		describe("createMeasurementWindows", () => {
			it("if passed three values, return single sum of those three values", () => {
				const input = [199, 200, 208];
				expect(createMeasurementWindows(input)).toEqual([607]);
			});
			it("if passed 4 values, return two sums of the first three and then last three values", () => {
				const input = [199, 200, 208, 210];
				expect(createMeasurementWindows(input)).toEqual([607, 618]);
			});
			it("if passed many values, return the sum of each three value sequence", () => {
				const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
				expect(createMeasurementWindows(input)).toEqual([607, 618, 618, 617, 647, 716, 769, 792]);
			});
		});
	});
});
