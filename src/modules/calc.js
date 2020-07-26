const calc = () => {
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

	// this.elemDoc.calcResult.value = +this.obj.priseOne + 1000;//значение по умолчанию
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
										calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 15000;//27000
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
									}
								}
								//3шт
								if (formNumberOne.value === '3 штуки') {
									if (formNumberTwo.value === '1 штука') {
										calcResult.value = (15000 * 50) / 100 + 18000; //25500
									} else if (formNumberTwo.value === '2 штуки') {
										calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 18000;
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
									}
								}
								//3шт
								if (formNumberOne.value === '3 штуки') {
									if (formNumberTwo.value === '1 штука') {
										calcResult.value = (15000 * 50) / 100 + 21000; //28500
									} else if (formNumberTwo.value === '2 штуки') {
										calcResult.value = (((15000 * 30) / 100) + ((15000 * 50) / 100)) + 21000;//33000
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
};
export default calc;
