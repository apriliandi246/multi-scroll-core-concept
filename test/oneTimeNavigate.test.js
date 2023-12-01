const oneTimeNavigate = require("../oneTimeNavigate");

describe("oneTimeNavigate", () => {
	describe("To bottom", () => {
		test("navigate to bottom and check the position of the left side of the slide", () => {
			const leftPositionLists = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
			const newLeftPositionLists = [-100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

			expect(oneTimeNavigate("bottom", "left", leftPositionLists)).toEqual(newLeftPositionLists);
		});

		test("navigate to bottom and check the position of the right side of the slide", () => {
			const leftPositionLists = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
			const newRightPositionLists = [100, 0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000];

			expect(oneTimeNavigate("bottom", "right", leftPositionLists)).toEqual(newRightPositionLists);
		});
	});

	describe("To top", () => {
		test("navigate to top and check the position of the left side of the slide", () => {
			const leftPositionLists = [-100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
			const newRightPositionLists = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];

			expect(oneTimeNavigate("top", "left", leftPositionLists)).toEqual(newRightPositionLists);
		});

		test("navigate to top and check the position of the right side of the slide", () => {
			const leftPositionLists = [-100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
			const newRightPositionLists = [0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100];

			expect(oneTimeNavigate("top", "right", leftPositionLists)).toEqual(newRightPositionLists);
		});
	});
});
