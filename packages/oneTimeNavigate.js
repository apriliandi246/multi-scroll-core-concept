function oneTimeNavigate(direction, slideSide, positionLists) {
	const positionListsArr = [...positionLists];

	if (direction === "bottom") {
		for (let positionsIdx = 0; positionsIdx < positionLists.length; positionsIdx++) {
			const newPosition = positionLists[positionsIdx] - 100;

			if (newPosition === 0) {
				positionListsArr[positionsIdx] = newPosition;
			} else {
				positionListsArr[positionsIdx] = slideSide === "left" ? newPosition : newPosition * -1;
			}
		}
	}

	if (direction === "top") {
		for (let positionsIdx = 0; positionsIdx < positionLists.length; positionsIdx++) {
			const newPosition = positionLists[positionsIdx] + 100;

			if (newPosition === 0) {
				positionListsArr[positionsIdx] = newPosition;
			} else {
				positionListsArr[positionsIdx] = slideSide === "left" ? newPosition : newPosition * -1;
			}
		}
	}

	return positionListsArr;
}

module.exports = oneTimeNavigate;
