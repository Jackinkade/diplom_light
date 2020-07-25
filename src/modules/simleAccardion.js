/* eslint-disable prefer-const */
const simleAcc = () => {
	const acc = document.querySelectorAll('.panel-collapse');
	acc.onclick =  e => {
		e.preventDefault();
		if (acc.classList.contains('collapse')) {
			acc.classList.remove('collapse');
			acc.classList.add('collapse in');
		} else if (acc.classList.contains('collapse in')) {
			acc.classList.remove('collapse in');
			acc.classList.add('collapse');
		}

	};
	console.log(acc);
};



export default simleAcc;
