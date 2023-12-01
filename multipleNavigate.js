function multipleNavigate(payload) {
	const { direction, currentActivePosition, nextActivePosition, positionLists, slideSide } = payload;
	const slidesComparisonNumber = Math.abs(currentActivePosition - nextActivePosition);
	const positionListsArr = [...positionLists];
	const positionListsArrRight = [];

	if (direction === "bottom") {
		for (let ii = 0; ii < slidesComparisonNumber; ii++) {
			for (let positionsIdx = 0; positionsIdx < positionListsArr.length; positionsIdx++) {
				const newPosition = positionListsArr[positionsIdx] - 100;
				positionListsArr[positionsIdx] = newPosition;
			}
		}

		if (slideSide === "right") {
			for (let positionsIdx = 0; positionsIdx < positionListsArr.length; positionsIdx++) {
				const newRightPosition = positionListsArr[positionsIdx] * -1;

				if (newRightPosition === -0) {
					positionListsArrRight.push(0);
				} else {
					positionListsArrRight.push(newRightPosition);
				}
			}

			return positionListsArrRight;
		}
	}

	if (direction === "top") {
		for (let ii = 0; ii < slidesComparisonNumber; ii++) {
			for (let positionsIdx = 0; positionsIdx < positionListsArr.length; positionsIdx++) {
				const newPosition = positionListsArr[positionsIdx] + 100;
				positionListsArr[positionsIdx] = newPosition;
			}
		}

		if (slideSide === "right") {
			for (let positionsIdx = 0; positionsIdx < positionListsArr.length; positionsIdx++) {
				const newRightPosition = positionListsArr[positionsIdx] * -1;

				if (newRightPosition === -0) {
					positionListsArrRight.push(0);
				} else {
					positionListsArrRight.push(newRightPosition);
				}
			}

			return positionListsArrRight;
		}
	}

	return positionListsArr;
}

module.exports = multipleNavigate;
