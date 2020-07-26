/* eslint-disable prefer-const */
const simleAcc = () => {
	const headingPanelTabs = document.querySelectorAll('.panel-heading'),
		collapseFirst = document.getElementById('collapseOne-two'),
		collapseSecond = document.getElementById('collapseTwo-two'),
		collapseThird = document.getElementById('collapseThree-two');

	headingPanelTabs.forEach(elem => {
		elem.addEventListener('click', () => {
			const definition = (first, second, third) => {
				if (first.style.display === 'block') {
					third.style.display = 'none';
					second.style.display = 'none';

				} else {
					first.style.display = 'block';
					third.style.display = 'none';
					second.style.display = 'none';
				}
			};
			//first
			if (elem.closest('#headingOne-two')) {
				definition(collapseFirst, collapseSecond, collapseThird);
			}
			//second
			if (elem.closest('#headingTwo-two')) {
				definition(collapseSecond, collapseFirst, collapseThird);
			}
			//third
			if (elem.closest('#headingThree-two')) {
				definition(collapseThird, collapseSecond, collapseFirst);
			}

		});

	});
};


export default simleAcc;

