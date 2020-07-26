const sendForm = () => {
	const errorMessage = "Что-то пошло не так...",
		loadMessage = "Загрузка...",
		successMessage = "Спасибо! Мы скоро с вами свяжемся!";
	const mainForm = document.querySelector(".main-form"),
		captureForm = document.querySelector(".capture-form-btn");

	const statusMessage = document.createElement("div");
	statusMessage.style.cssText = `font-size: 2rem;`;

	//Валидация данных
	const  maskPhone = () => {
		const elemPhone = document.querySelectorAll('.phone-user');
		elemPhone.forEach(elem => {

			const maskPhone = (masked = '+7 (___) ___-__-__') => {
				function mask(event) {
					const keyCode = event.keyCode;
					const template = masked,

						def = template.replace(/\D/g, ""),
						val = elem.value.replace(/\D/g, "");
					let i = 0,
						newValue = template.replace(/[_\d]/g,
							a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
					i = newValue.indexOf("_");
					if (i !== -1) {
						newValue = newValue.slice(0, i);
					}
					let reg = template.substr(0, elem.value.length).replace(/_+/g,
						a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
					reg = new RegExp("^" + reg + "$");
					if (!reg.test(elem.value) || elem.value.length < 5 || keyCode > 47 && keyCode < 58) {
						elem.value = newValue;
					}
					if (event.type === "blur" && elem.value.length < 5) {
						elem.value = "";
					}
				}
				elem.addEventListener("input", mask);
				elem.addEventListener("focus", mask);
				elem.addEventListener("blur", mask);
			};
			maskPhone();
		});
	};
	maskPhone();
	const inputCheck = () => { //ввод. в инпут только цифры и кириллица
		const input = document.querySelectorAll('input');
		input.forEach(elem => {
			elem.addEventListener('input', () => {
				if (elem.name === 'user_name') {
					elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
					elem.setAttribute('maxlength', '25');
				}

				if (elem.name === 'user_phone') {
					elem.setAttribute('maxlength', '18');
				}

				if (elem.name === 'user_quest') { //'введите вопрос'
					elem.value = elem.value.replace(/[^а-яА-ЯЁё]/g, "");
					elem.setAttribute('maxlength', '120');
				}
				if (elem.matches('.distance')) {
					elem.value = elem.value.replace(/\D/, '');
					elem.setAttribute('maxlength', '10');
				}

			});

		});
	};
	inputCheck();
	const postData = body => fetch("./server.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		credentials: "include",
	});
	//Слушатели при отправке
	mainForm.addEventListener("submit", e => {

		e.preventDefault();

		mainForm.appendChild(statusMessage);
		statusMessage.textContent = loadMessage;
		const formData = new FormData(mainForm);
		const body = {};
		formData.forEach((value, key) => (body[key] = value));
		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error("status network not 200");
				}
				statusMessage.textContent = successMessage;
			})
			.catch(error => {
				console.error(error);
				statusMessage.textContent = errorMessage;
			});
		setTimeout(() => {
			statusMessage.textContent = "";
		}, 3000);


		mainForm.querySelectorAll("input").forEach(item => (item.value = ""));
	});


	captureForm.addEventListener("submit", elem => {
		elem.preventDefault();
		captureForm.append(statusMessage);
		statusMessage.textContent = loadMessage;
		const formData = new FormData(captureForm);
		const body = {};
		formData.forEach((value, key) => (body[key] = value));

		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error("status network not 200");
				}
			})
			.catch(error => {
				console.error(error);
				statusMessage.textContent = errorMessage;
			});

		captureForm.querySelectorAll("input").forEach(item => (item.value = ""));
	});


};
export default sendForm;
