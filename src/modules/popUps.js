/* eslint-disable linebreak-style */
const popupsAll = () => {
    const btnAlertModal = (btn, popupWindow) => {
        btn.forEach(elem => {
            elem.addEventListener('click', event => {
                event.preventDefault();
                popupWindow.style.display = 'block';

            });
        });
        popupWindow.addEventListener('click', event => {
            const popupNone = () => {
                popupWindow.style.display = 'none';
            };
            let target = event.target;
            if (target.matches('.popup-close')) {
                event.preventDefault();
                popupNone();
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupNone();
                }
            }
        });
    };

    const popupCall = () => {
        const popupCall = document.querySelector('.popup-call'),
            callBtn = document.querySelectorAll('.call-btn'),
            popupContentCall = document.querySelectorAll('.popup-content')[0],
            callForm = document.querySelectorAll('.capture-form')[1];

        btnAlertModal(callBtn, popupCall, popupContentCall, callForm);
    };
    popupCall();


    const popupDiscount = () => {
        const btnDiscount = document.querySelectorAll('.discount-btn'),
            popupDiscount = document.querySelector('.popup-discount'),
            popupContentDiscount = document.querySelectorAll('.popup-content')[1],
            discountForm = document.querySelectorAll('.capture-form')[2];

        btnAlertModal(btnDiscount, popupDiscount, popupContentDiscount, discountForm);
    };
    popupDiscount();

    //Popup-check
    const popupCheck = () => {
        const btnCheck = document.querySelectorAll('.gauging-button'),
            popupCheck = document.querySelector('.popup-check'),
            popupContentCheck = document.querySelectorAll('.popup-content')[2],
            checkForm = document.querySelectorAll('.capture-form')[3];

        btnAlertModal(btnCheck, popupCheck, popupContentCheck, checkForm);
    };
    popupCheck();


    const popupDiscountCalc = () => {
        const btnDiscountCalc = document.querySelectorAll('.btnFour'),
            popupDiscountCalc = document.querySelector('.popup-discount-calculation'),
            popupContentDiscountCalc = document.querySelectorAll('.popup-content')[4],
            discountCalcForm = document.querySelectorAll('.capture-form')[5];

        btnAlertModal(btnDiscountCalc, popupDiscountCalc, popupContentDiscountCalc, discountCalcForm);
    };
    popupDiscountCalc();


    const popupConsultation = () => {
        const btnConsultation = document.querySelectorAll('.consultation-btn'),
            popupConsultation = document.querySelector('.popup-consultation'),
            popupContentConsultation = document.querySelectorAll('.popup-content')[3],
            consultationForm = document.querySelectorAll('.capture-form')[4];

        btnAlertModal(btnConsultation, popupConsultation, popupContentConsultation, consultationForm);
    };
    popupConsultation();

};
export default popupsAll;
