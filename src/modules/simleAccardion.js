/* eslint-disable prefer-const */
const simleAcc = () => {
	const btnAccordion = document.querySelectorAll(`a[data-parent="#accordion-two"]`),
		collapseOneId = document.getElementById('collapseOne-two'),
		collapseTwoId = document.getElementById('collapseTwo-two'),
		collapseThreeId = document.getElementById('collapseThree-two');

	btnAccordion.forEach(elem => {
		elem.addEventListener('click', event => {
			event.preventDefault();
			const foo = (one, two, tree) => {
				if (one.style.display === 'block') { //collapseThreeId
					one.style.display = 'block';//collapseThreeId

				} else {
					tree.style.display = 'none';//collapseOneId
					two.style.display = 'none';//collapseTwoId
					one.style.display = 'block';//collapseThreeId
				}
			};
			//One
			if (elem.closest('#headingOne-two')) {
				foo(collapseOneId, collapseTwoId, collapseThreeId);
			}
			//Two
			if (elem.closest('#headingTwo-two') || elem.matches('.btnOne')) {
				foo(collapseTwoId, collapseOneId, collapseThreeId);
			}
			//Three
			if (elem.closest('#headingThree-two') || elem.matches('.btnTwo')) {

				foo(collapseThreeId, collapseTwoId, collapseOneId);
			}

		});

	});

};


export default simleAcc;
