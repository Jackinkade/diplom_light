const addElems = () => {
	const addButton = document.querySelector('.add-sentence-btn');

	addButton.style.display = 'block';
	addButton.style.position = 'relative';
	addButton.style.textAligin = 'center';
	addButton.style.left = 45 + '%';

	const removeButton = () => {
		addButton.style.display = 'none';
	};
	addButton.addEventListener('click', removeButton);


};//нодо убрать класс hidden & visible-sb-block
export default addElems;
