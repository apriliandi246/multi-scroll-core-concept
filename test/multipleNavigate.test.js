const multipleNavigate = require("../packages/multipleNavigate");

describe("multipleNavigate", () => {
	describe("To bottom", () => {
		test("navigate to bottom and check the position of the left side of the slide (start with zero and go to 2)", () => {
			const leftPositionLists = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
			const newLeftPositionLists = [-200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

			const payload = {
				direction: "bottom",
				currentActivePosition: 0,
				nextActivePosition: 2,
				positionLists: leftPositionLists,
				slideSide: "left"
			};

			expect(multipleNavigate(payload)).toEqual(newLeftPositionLists);
		});

		test("navigate to bottom and check the position of the right side of the slide (start with zero and go to 2)", () => {
			const leftPositionLists = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
			const newRightPositionLists = [200, 100, 0, -100, -200, -300, -400, -500, -600, -700, -800, -900];

			const payload = {
				direction: "bottom",
				currentActivePosition: 0,
				nextActivePosition: 2,
				positionLists: leftPositionLists,
				slideSide: "right"
			};

			expect(multipleNavigate(payload)).toEqual(newRightPositionLists);
		});

		test("navigate to bottom and check the position of the left side of the slide (start with 3 and go to 7)", () => {
			const leftPositionLists = [-300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800];
			const newLeftPositionLists = [-700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400];

			const payload = {
				direction: "bottom",
				currentActivePosition: 3,
				nextActivePosition: 7,
				positionLists: leftPositionLists,
				slideSide: "left"
			};

			expect(multipleNavigate(payload)).toEqual(newLeftPositionLists);
		});

		test("navigate to bottom and check the position of the right side of the slide (start with 3 and go to 7)", () => {
			const leftPositionLists = [-300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800];
			const newRightPositionLists = [700, 600, 500, 400, 300, 200, 100, 0, -100, -200, -300, -400];

			const payload = {
				direction: "bottom",
				currentActivePosition: 3,
				nextActivePosition: 7,
				positionLists: leftPositionLists,
				slideSide: "right"
			};

			expect(multipleNavigate(payload)).toEqual(newRightPositionLists);
		});

		test("navigate to bottom and check the position of the left side of the slide (start with 7 and go to the last of slide)", () => {
			const leftPositionLists = [-700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400];
			const newLeftPositionLists = [-1100, -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, 0];

			const payload = {
				direction: "bottom",
				currentActivePosition: 7,
				nextActivePosition: leftPositionLists.length - 1,
				positionLists: leftPositionLists,
				slideSide: "left"
			};

			expect(multipleNavigate(payload)).toEqual(newLeftPositionLists);
		});

		test("navigate to bottom and check the position of the right side of the slide (start with 7 and go to the last of slide)", () => {
			const leftPositionLists = [-700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400];
			const newRightPositionLists = [1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 0];

			const payload = {
				direction: "bottom",
				currentActivePosition: 7,
				nextActivePosition: leftPositionLists.length - 1,
				positionLists: leftPositionLists,
				slideSide: "right"
			};

			expect(multipleNavigate(payload)).toEqual(newRightPositionLists);
		});
	});

	describe("To top", () => {
		test("navigate to top and check the position of the left side of the slide (start with the last slide and go to 7)", () => {
			const leftPositionLists = [-1100, -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, 0];
			const newLeftPositionLists = [-700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400];

			const payload = {
				direction: "top",
				currentActivePosition: leftPositionLists.length - 1,
				nextActivePosition: 7,
				positionLists: leftPositionLists,
				slideSide: "left"
			};

			expect(multipleNavigate(payload)).toEqual(newLeftPositionLists);
		});

		test("navigate to top and check the position of the right side of the slide (start with the last slide and go to 7)", () => {
			const leftPositionLists = [-1100, -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, 0];
			const newRightPositionLists = [700, 600, 500, 400, 300, 200, 100, 0, -100, -200, -300, -400];

			const payload = {
				direction: "top",
				currentActivePosition: leftPositionLists.length - 1,
				nextActivePosition: 7,
				positionLists: leftPositionLists,
				slideSide: "right"
			};

			expect(multipleNavigate(payload)).toEqual(newRightPositionLists);
		});

		test("navigate to top and check the position of the left side of the slide (start with 7 and go to 3)", () => {
			const leftPositionLists = [-700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400];
			const newLeftPositionLists = [-300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800];

			const payload = {
				direction: "top",
				currentActivePosition: 7,
				nextActivePosition: 3,
				positionLists: leftPositionLists,
				slideSide: "left"
			};

			expect(multipleNavigate(payload)).toEqual(newLeftPositionLists);
		});

		test("navigate to top and check the position of the right side of the slide (start with 7 and go to 3)", () => {
			const leftPositionLists = [-700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400];
			const newRightPositionLists = [300, 200, 100, 0, -100, -200, -300, -400, -500, -600, -700, -800];

			const payload = {
				direction: "top",
				currentActivePosition: 7,
				nextActivePosition: 3,
				positionLists: leftPositionLists,
				slideSide: "right"
			};

			expect(multipleNavigate(payload)).toEqual(newRightPositionLists);
		});

		test("navigate to top and check the position of the left side of the slide (start with 3 and go to zero)", () => {
			const leftPositionLists = [-300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800];
			const newLeftPositionLists = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];

			const payload = {
				direction: "top",
				currentActivePosition: 3,
				nextActivePosition: 0,
				positionLists: leftPositionLists,
				slideSide: "left"
			};

			expect(multipleNavigate(payload)).toEqual(newLeftPositionLists);
		});

		test("navigate to top and check the position of the right side of the slide (start with 3 and go to zero)", () => {
			const leftPositionLists = [-300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800];
			const newRightPositionLists = [0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100];

			const payload = {
				direction: "top",
				currentActivePosition: 3,
				nextActivePosition: 0,
				positionLists: leftPositionLists,
				slideSide: "right"
			};

			expect(multipleNavigate(payload)).toEqual(newRightPositionLists);
		});
	});
});
