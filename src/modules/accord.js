/* eslint-disable linebreak-style */
const simpleAcc = () => {
    const button = document.querySelectorAll('.acc'),
        buttonAcc = document.querySelectorAll(`a[data-parent="#accordion-two"]`),
        firstText = document.getElementById('collapseOne-two'),
        secondText = document.getElementById('collapseTwo-two'),
        thirdText = document.getElementById('collapseThree-two');

    firstText.style.maxHeight = firstText.scrollHeight + "px";
    button.forEach(elem => {
        elem.style.cursor = 'pointer';
    });

    button.forEach(elem => {
        elem.addEventListener('click', event => {
            const target = event.target;
            const changeContent = (one, second, third) => {
                one.style.maxHeight = firstText.scrollHeight + "px";
                third.style.maxHeight = null;
                second.style.maxHeight = null;
            };
            if (target === button[0] || target === buttonAcc[0]) {
                changeContent(firstText, secondText, thirdText);
            }
            if (target === button[1] || target === buttonAcc[1]) {
                changeContent(secondText, firstText, thirdText);
            }
            if (target === button[2] || target === buttonAcc[2]) {
                changeContent(thirdText, firstText, secondText);
            }
        });
    });
};


export default simpleAcc;
