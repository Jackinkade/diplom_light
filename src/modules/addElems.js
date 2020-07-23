const addElems = () => {
	const showHiddenBox = document.querySelectorAll(`.col-xs-12.col-sm-6.col-md-4`),
		buttonBolshe = document.querySelector('.add-sentence-btn');


	buttonBolshe.addEventListener('click', event => {
		event.preventDefault();
		showHiddenBox.forEach(elem => {
			if (elem.matches('.visible-sm-block') || elem.matches('.hidden')) {
				elem.classList.remove('visible-sm-block', 'hidden');
				buttonBolshe.style.cssText = `transform: scale(0)`;
			}

		});

	});

};
//нодо убрать класс hidden & visible-sb-block
export default addElems;
