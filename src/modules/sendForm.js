const sendForm = () => {


	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро свяжемся с Вами!';
	const body = {};
	const allForms = document.querySelectorAll('form');
	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
		mode: 'cors'
	});

	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);

		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			let i = 0,
				newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}

		}

		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}

	}
	maskPhone(`[name='user_phone']`);




	allForms.forEach(form => {
		form.addEventListener('input', evt => {
			const target = evt.target;
			if (target.name === 'user_phone') {
				if (target.style) {
					target.style.border = 'none';
				}
				target.value = target.value.replace(/[^+\d]/g, '');
				if (!/^\+?(\d){0,18}$/g.test(target.value)) {
					target.value = target.value.substring(0, target.value.length - 1);
				}

			}
			if (target.name === 'user_name' || target.name === 'user_quest') {
				target.value = target.value.replace(/[^а-я ]/gi, '');
			}
		});


		const statusMessage = document.createElement('div');
		statusMessage.style.cssText = 'font-size: 2rem';

		const errorInput = inp => {
			let div = inp.parentNode;
			div = div.querySelector('.input-error');
			if (div) {
				return;
			}
			inp.style.border = '2px solid red';

			const inputError = document.querySelector('.input-error');
			setTimeout(() => {
				inputError.remove();
				inp.removeAttribute('style');
			}, 3000);
		};

		const validateTel = tel => {
			const str = tel[0].value.replace('+', '').length;
			if (str < 6) {
				errorInput(tel[0]);
				return false;
			} else {
				return true;
			}

		};
		form.addEventListener('submit', event => {
			event.preventDefault();

			const firmTel = [...event.target.elements].filter(item => item.name === 'user_phone');
			if (!validateTel(firmTel)) {
				return;
			}
			form.appendChild(statusMessage);
			statusMessage.textContent = loadMessage;


			const formData = new FormData(form);
			form.querySelectorAll('input').forEach(elem => {
				elem.value = '';
			});

			formData.forEach((val, key) => {
				body[key] = val;
			});
			const outputData = () => {


				statusMessage.textContent = successMessage;
				setTimeout(() => statusMessage.remove(), 3000);
				form.reset();
			};

			const error = () => {


				statusMessage.textContent = errorMessage;
				setTimeout(() => statusMessage.remove(), 3000);

				form.reject();

			};
			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw 'error !!! ';
					}
					outputData();
				})
				.catch(error);

		});
	});


};

export default sendForm;
