class SendFormCalc {
	constructor() {
		this.obj = {
			priseOne: 10000,
			priseTwo: 15000,
			wellTwo: 0,
			wellOne: 0
		};
		this.obj2 = {
			result: 0,
			distance: 0,
			diameter1: '1.4 метра',
			diameter2: '1.4 метра',
			number1: '1 штука',
			number2: '1 штука',
		};
		this.elemDoc = {
			//calculator elem
			formDiameterOne: document.querySelectorAll('.form-control')[0],
			formNumberOne: document.querySelectorAll('.form-control')[1],
			formDiameterTwo: document.querySelectorAll('.form-control')[2],
			formNumberTwo: document.querySelectorAll('.form-control')[3],
			inputDistance: document.querySelector('.distance'),
			calcResult: document.getElementById('calc-result'),
		};
		//массив для ошибочных инпутов, вмещает уникальные эл., не повторяются
		this.error = new Set();
	}
	start() {
		this.inputCheck();
		this.maskPhoneUse();
		this.calculator();
		this.sendForm();
	}

	inputCheck() { //ввод. в инпут только цифры и кириллица
		const input = document.querySelectorAll('input');
		input.forEach(elem => {
			elem.addEventListener('input', () => {
				if (elem.name === 'user_name') {
					elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
					elem.setAttribute('maxlength', '25');
				}

				if (elem.name === 'user_phone') {
					elem.setAttribute('maxlength', '18'); //ограничение на кол-во символов
				}

				if (elem.name === 'user_quest') { //'введите вопрос'
					elem.value = elem.value.replace(/[^a-zа-яё\s\d?!.,:;]/ig, '');
					elem.setAttribute('maxlength', '120');
				}
				if (elem.matches('.distance')) {
					elem.value = elem.value.replace(/\D/, '');
					elem.setAttribute('maxlength', '10');
				}

			});

		});
	}

	maskPhoneUse() {
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
	}

	calculator() {
		//calculator elem
		const calcResult = document.getElementById('calc-result'),
			sumpTwo = document.querySelector('.sumpTwo'),
			formControl = document.querySelectorAll('.form-control'),
			formDiameterOne = document.querySelectorAll('.form-control')[0],
			formNumberOne = document.querySelectorAll('.form-control')[1],
			formDiameterTwo = document.querySelectorAll('.form-control')[2],
			formNumberTwo = document.querySelectorAll('.form-control')[3],
			inputDistance = document.querySelector('.distance'),
			btnFour = document.querySelector('.btnFour'),
			collapseFourId = document.getElementById('collapseFour');

		const myOnOffSwitchOne = document.getElementById('myonoffswitch'),
			myOnOffSwitchTwo = document.getElementById('myonoffswitch-two');


		myOnOffSwitchOne.addEventListener('change', () => {
			if (myOnOffSwitchOne.checked) { //если чекбокс включён

				//1 колодец
				const chamberOne = () => {
					sumpTwo.style.display = 'none';
					calcResult.value = +this.obj.priseOne + 1000; //цена за днище

					formControl.forEach(elem => {

						elem.addEventListener('change', () => {

							if (formDiameterOne.value === '1.4 метра') {

								if (formNumberOne.value === '1 штука') {
									calcResult.value = 10000;
								}
								if (formNumberOne.value === '2 штуки') {
									calcResult.value = ((10000 * 30) / 100) + 10000;
								} else if (formNumberOne.value === '3 штуки') {
									calcResult.value = ((10000 * 50) / 100) + 10000;
								}
							}

							if (formDiameterOne.value === '2 метра') {
								calcResult.value = ((10000 * 20) / 100) + 10000;

								if (formNumberOne.value === '1 штука') {
									calcResult.value = 12000;
								}
								if (formNumberOne.value === '2 штуки') {
									calcResult.value = ((10000 * 30) / 100) + 12000;
								} else if (formNumberOne.value === '3 штуки') {
									calcResult.value = ((10000 * 50) / 100) + 12000;
								}
							}
							//
							this.obj.wellOne = calcResult.value;
							calcResult.value = +calcResult.value + 1000; //отображаем в примерной стоимости

						});
					});
				};
				chamberOne();

				//2 колодца
			} else if (!myOnOffSwitchOne.checked) {
				const chamberTwo = () => {
					sumpTwo.style.display = 'block';
					calcResult.value = +this.obj.priseTwo + 2000;

					formControl.forEach(elem => {
						elem.addEventListener('change', () => {
							//1 proviso
							if (sumpTwo.style.display === 'block') {
								if (formDiameterOne.value === '1.4 метра' && formDiameterTwo.value === '1.4 метра') {
									//1шт
									if (formNumberOne.value === '1 штука') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = 15000; //15000
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = (15000 * 30) / 100 + 15000; //19500
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = (15000 * 50) / 100 + 15000; //22500
										}
									}
									//2шт
									if (formNumberOne.value === '2 штуки') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = (15000 * 30) / 100 + 15000; //19500
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = ((15000 * 30) / 100) * 2 + 15000; //24000
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 15000;
											//27000
										}
									}
									//3шт
									if (formNumberOne.value === '3 штуки') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = (15000 * 50) / 100 + 15000; //22500
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 15000;
										//27000
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = ((15000 * 50) / 100) * 2 + 15000; //30000
										}
									}
								}
								//2 proviso
								if (formDiameterOne.value === '2 метра' && formDiameterTwo.value === '1.4 метра' ||
                           formDiameterOne.value === '1.4 метра' && formDiameterTwo.value === '2 метра') {
									this.elemDoc.calcResult.value = ((15000 * 20) / 100) + 15000; //18000
									//1шт
									if (formNumberOne.value === '1 штука') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = 18000; //18000
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = (15000 * 30) / 100 + 18000; //22500
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = (15000 * 50) / 100 + 18000; //25500
										}
									}
									//2шт
									if (formNumberOne.value === '2 штуки') {
										if (formNumberTwo.value === '1 штука') {
											this.elemDoc.calcResult.value = (15000 * 30) / 100 + 18000; //22500
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = ((15000 * 30) / 100) * 2 + 18000; //27000
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 18000;
											//30000
										}
									}
									//3шт
									if (formNumberOne.value === '3 штуки') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = (15000 * 50) / 100 + 18000; //25500
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 18000;
										//30000
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = ((15000 * 50) / 100) * 2 + 18000; //33000
										}
									}
								}
								//3 proviso
								if (formDiameterOne.value === '2 метра' && formDiameterTwo.value === '2 метра') {
									calcResult.value = ((15000 * 20) / 100) * 2 + 15000; //21000
									//1шт
									if (this.elemDoc.formNumberOne.value === '1 штука') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = 21000; //21000
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = (15000 * 30) / 100 + 21000; //25500
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = (15000 * 50) / 100 + 21000; //28500
										}
									}
									//2шт
									if (formNumberOne.value === '2 штуки') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = (15000 * 30) / 100 + 21000; //25500
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = ((15000 * 30) / 100) * 2 + 21000; //30000
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 21000;
											//33000
										}
									}
									//3шт
									if (formNumberOne.value === '3 штуки') {
										if (formNumberTwo.value === '1 штука') {
											calcResult.value = (15000 * 50) / 100 + 21000; //28500
										} else if (formNumberTwo.value === '2 штуки') {
											calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 21000;
											//33000
										} else if (formNumberTwo.value === '3 штуки') {
											calcResult.value = ((15000 * 50) / 100) * 2 + 21000; //36000
										}
									}
								}
								//
								this.obj.wellTwo = calcResult.value;
								calcResult.value = +calcResult.value + 2000;
							}
						});
					});
				};
				chamberTwo();
			}
		});
		//дно у колодца
		const wellBottom = () => {
			myOnOffSwitchTwo.addEventListener('change', () => {
				if (myOnOffSwitchTwo.checked) {
					if (sumpTwo.style.display === 'none') {
						if (+this.obj.wellOne > 0) {
							calcResult.value = +this.obj.wellOne + 1000;
						} else if (+this.obj.wellOne === 0) {
							calcResult.value = +this.obj.priseOne + 1000;
						}
					}
					if (sumpTwo.style.display === 'block') {
						if (+this.obj.wellTwo > 0) {
							calcResult.value = +this.obj.wellTwo + 2000;
						} else if (+this.obj.wellTwo === 0) {
							calcResult.value = +this.obj.priseTwo + 2000;
						}
					}
				} else if (!myOnOffSwitchTwo.checked) {
					if (sumpTwo.style.display === 'none') {
						if (+this.obj.wellOne > 0) {
							calcResult.value = +this.obj.wellOne;
						} else {
							calcResult.value = +this.obj.priseOne;
						}
					}
					if (sumpTwo.style.display === 'block') {
						if (+this.obj.wellTwo > 0) {
							calcResult.value = +this.obj.wellTwo;
						} else {
							calcResult.value = +this.obj.priseTwo;
						}
					}
				}
			});

		};
		wellBottom();

		//очистка объекта от значений 2-го колодца (выбран 1 колодец)
		const deletElemObj2 = () => {
			this.obj2.diameter2 = '';
			this.obj2.number2 = '';
		};

		//передаём значения в объект2
		const elemObj2 = () => {
			formControl.forEach(elem => {
				elem.addEventListener('change', () => {
					if (sumpTwo.style.display === 'block') {
						if (elem === formDiameterOne) {
							this.obj2.diameter1 = elem.value;
						} else if (elem === formNumberOne) {
							this.obj2.number1 = elem.value;
						} else if (elem === formDiameterTwo) {
							this.obj2.diameter2 = elem.value;
						} else if (elem === formNumberTwo) {
							this.obj2.number2 = elem.value;
						}
					}
					if (sumpTwo.style.display === 'none') {
						if (elem === formDiameterOne) {
							this.obj2.diameter1 = elem.value;
						} else if (elem === formNumberOne) {
							this.obj2.number1 = elem.value;
						}
						deletElemObj2(); //очистка значений при 1 колодце
					}
				});
			});
		};
		elemObj2();

		//Передаём расстояние в объект2
		const inputDistanceObj = () => {
			inputDistance.addEventListener('input', () => {
				this.obj2.result = +calcResult.value;
				this.obj2.distance = +inputDistance.value;
			});
		};
		inputDistanceObj();

		//Закрываем последний блок
		const closeCollapseFour = () => {
			btnFour.addEventListener('click', () => { //закрываем последний блок при нажатии на кнопку "получить расчёт"
				if (sumpTwo.style.display === 'none') { //проверка при выборе 1 колодца
					deletElemObj2(); //очистка значений
				}
				if (collapseFourId.style.display === 'block') {
					collapseFourId.style.display = 'none';
				}
			});
		};
		closeCollapseFour();
	}

	sendForm() {
		//send form elem
		const mainForm = document.querySelector('.main-form'),
			captureForm = document.querySelectorAll('.capture-form')[0],
			callForm = document.querySelectorAll('.capture-form')[1],
			discountForm = document.querySelectorAll('.capture-form')[2],
			discountCalcForm = document.querySelectorAll('.capture-form')[5],
			checkForm = document.querySelectorAll('.capture-form')[3],
			directorForm = document.querySelector('.director-form'),
			consultationForm = document.querySelectorAll('.capture-form')[4],
			popupCall = document.querySelector('.popup-call'),
			popupDiscount = document.querySelector('.popup-discount'),
			popupDiscountCalc = document.querySelector('.popup-discount-calculation'),
			popupCheck = document.querySelector('.popup-check'),
			popupConsultation = document.querySelector('.popup-consultation');

		const successMessage = 'Сообщение отправлено',
			loadMessage = 'Идёт отправка',
			errorMessage = 'Что-то пошло не так...';

		//создаём элемент с классом для вывода сообщения
		const statusMessage = document.createElement('div');
		statusMessage.classList.add('statusmessage');
		const statusDiv = document.createElement('div');
		statusDiv.classList.add('statusdiv');

		//валидация инпутов
		const valid = (event, form) => {
			const elementsForm = []; //пустой массив для инпутов

			for (const elem of form.elements) { //вытаскиваем из формы инпуты
				if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
					elementsForm.push(elem); //пушим в массив только наши инпуты
				}
			}

			elementsForm.forEach(elem => {
				const patternText = (/^[а-яё\s]+$/i);
				const patternPhone = /^[+]\d{1}\s[(]\d{3}[)]\s\d{3}[-]\d{2}[-]\d{2}$/;
				//const patternPhone = /^\+?[7]([-\''()]*\d){18}$/;
				//const patternEmail = /^[\w-]+@\w+\.\w{1,}\D$/;//после точки больше 1 символа, не цифры

				if (elem.value.trim() === '' || elem.name === 'user_phone' && !patternPhone.test(elem.value) ||
               elem.name === 'user_name' && !patternText.test(elem.value)) { //если не проходит валидацию
					event.preventDefault();
					elem.style.border = '2px solid red';
					this.error.add(elem); //добавл. инпуты с ошибками в Set
				} else {
					event.preventDefault();
					this.error.delete(elem); //удал. инпуты из Seta
					elem.style.border = '';
				}
			});

		};

		//отправка и очистка
		const sendReset = (event, form, form2, obj) => {

			//создание формы для отправки
			const getForm = (event, form, form2, obj) => {

				event.preventDefault(); //чтобы страница не перезагружалась по умолчанию
				form.appendChild(statusDiv);
				statusDiv.appendChild(statusMessage);

				statusMessage.textContent = loadMessage; //идёт загрузка
				const body = {}; //объект, ко-й отправл. на сервер в формате json

				const formData = new FormData(form); //получ. данные нашей формы c атрибутом name в объект
				if (form2) {
					for (const elem of form2.elements) { //вытаскиваем из формы инпуты
						if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
							formData.append(elem.name, elem.value); //добавляем ключ и значение в formData
						}
					}
				}
				if (obj) {
					for (const key in obj) { //эл. в др. объект
						body[key] = obj[key];
					}
				}
				formData.forEach((val, key) => {
					body[key] = val;
				});

				//postData - отправка на сервер
				const postData = body =>  //ф. отправки запроса
					fetch('./server.php', { //отправка запроса на сервер с по-ю промисов
						method: 'POST', //отправляем и получаем
						headers: { //заголовки
							'Content-Type': 'application/json' //сообщаем серверу, что передаём json
						},
						body: JSON.stringify(body), //преобр. данные (~body) в json(строка) и передаём
						credentials: 'include',
						cache: 'default'
					})
            ;

				postData(body)
					.then(response => { //данные, ко-е мы получаем
						if (response.status !== 200) {
							throw new Error('status network not 200'); //обрабатываем как ошибку через конструктор
						}
						statusMessage.textContent = successMessage;
					})
					.catch(error => {
						statusMessage.style.color = '#bd1717'; //красный цвет сообщения
						statusMessage.textContent = errorMessage;
						console.error(error);
					});

				setTimeout(() => { //убираем сообщение
					form.removeChild(statusDiv);
				}, 3000);
			};

			//очистка объекта
			const resetObj = () => {
				this.elemDoc.calcResult.value = '';
				this.elemDoc.inputDistance.value = '';
				this.obj = {
					priseOne: 10000,
					priseTwo: 15000,
					wellTwo: 0,
					wellOne: 0
				};
				this.obj2 = {
					result: 0,
					distance: 0,
					diameter1: '1.4 метра',
					diameter2: '1.4 метра',
					number1: '1 штука',
					number2: '1 штука'
				};
				this.elemDoc.formDiameterOne.value = '1.4 метра';
				this.elemDoc.formNumberOne.value = '1 штука';
				this.elemDoc.formDiameterTwo.value = '1.4 метра';
				this.elemDoc.formNumberTwo.value = '1 штука';
			};

			//очистка инпутов формы и значений объекта
			const inputReset = (form, form2, obj) => {

				for (const elem of form.elements) {
					if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
						elem.value = '';
						elem.removeAttribute('required'); //удаляем required
					}
				}
				if (form2) {
					for (const elem of form2.elements) {
						if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
							elem.value = '';
							elem.removeAttribute('required');
						}
					}
				}
				if (obj) { //очистка при наличии объекта
					resetObj();
				}
			};

			if (!this.error.size) { //если size не содержит ошибки (в Set);size коли-во эл. в массиве Set
				getForm(event, form, form2, obj);
				inputReset(form, form2, obj);
			}
		};

		//если ошибок в массиве нет, удаляем мод. окно
		const popupNone = popupWindow => {
			if (!this.error.size) {
				setTimeout(() => {
					popupWindow.style.display = 'none';
				}, 6000);
			}
		};

		//отправка данных с форм
		mainForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, mainForm);
			sendReset(event, mainForm);
		});

		captureForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, captureForm);
			sendReset(event, captureForm);
		});

		callForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, callForm);
			sendReset(event, callForm);
			popupNone(popupCall);
		});

		discountForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, discountForm);
			sendReset(event, discountForm);
			popupNone(popupDiscount);
		});

		checkForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, checkForm);
			sendReset(event, checkForm);
			popupNone(popupCheck);
		});

		consultationForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, consultationForm);
			sendReset(event, consultationForm, directorForm);
			popupNone(popupConsultation);
		});

		discountCalcForm.addEventListener('submit', event => {
			event.preventDefault();
			valid(event, discountCalcForm);
			sendReset(event, discountCalcForm, null, this.obj2);
			popupNone(popupDiscountCalc);
		});

	}

}

const mySendFormCalc = new SendFormCalc();

export default mySendFormCalc;
