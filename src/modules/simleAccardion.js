/* eslint-disable prefer-const */
const simleAcc = () => {
	const btnAccordion = document.querySelectorAll(`a[data-parent="#accordion-two"]`),
		collapseOneId = document.getElementById('collapseOne-two'),
		collapseTwoId = document.getElementById('collapseTwo-two'),
		collapseThreeId = document.getElementById('collapseThree-two');

	btnAccordion.forEach(elem => {
		elem.addEventListener('click', event => {
			event.preventDefault();
			//One
			if (elem.closest('#headingOne-two')) {
				if (collapseOneId.style.display === 'none') {
					collapseOneId.style.display = 'block';
					collapseTwoId.style.display = 'none';
					collapseThreeId.style.display = 'none';

				} else {
					collapseOneId.style.display = 'block';
				}
			}
			//Two
			if (elem.closest('#headingTwo-two') || elem.matches('.btnOne')) {

				if (collapseTwoId.style.display === 'block') {
					collapseTwoId.style.display = 'block';

				} else {
					collapseOneId.style.display = 'none';
					collapseTwoId.style.display = 'block';
					collapseThreeId.style.display = 'none';
				}
			}
			//Three
			if (elem.closest('#headingThree-two') || elem.matches('.btnTwo')) {

				if (collapseThreeId.style.display === 'block') {
					collapseThreeId.style.display = 'block';

				} else {
					collapseOneId.style.display = 'none';
					collapseTwoId.style.display = 'none';
					collapseThreeId.style.display = 'block';
				}
			}

		});

	});

};


export default simleAcc;
