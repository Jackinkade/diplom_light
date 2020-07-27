/* eslint-disable linebreak-style */
const simpleAcc = () => {

    const btn = document.querySelectorAll('.acc'),
        btnAcc = document.querySelectorAll(`a[data-parent="#accordion-two"]`),
        content1 = document.getElementById('collapseOne-two'),
        content2 = document.getElementById('collapseTwo-two'),
        content3 = document.getElementById('collapseThree-two');
    content1.style.maxHeight = content1.scrollHeight + "px";

    btn.forEach(elem => {
        elem.style.cursor = 'pointer';
    });

    btn.forEach(elem => {
        elem.addEventListener('click', event => {

            const target = event.target;

            if (target === btn[0] || target === btnAcc[0]) {
                content3.style.maxHeight = null;
                content2.style.maxHeight = null;
                content1.style.maxHeight = content1.scrollHeight + "px";
            }
            if (target === btn[1] || target === btnAcc[1]) {
                content3.style.maxHeight = null;
                content1.style.maxHeight = null;
                content2.style.maxHeight = content1.scrollHeight + "px";
            }
            if (target === btn[2] || target === btnAcc[2]) {
                content1.style.maxHeight = null;
                content2.style.maxHeight = null;
                content3.style.maxHeight = content1.scrollHeight + "px";
            }

        });
    });



};


export default simpleAcc;
