/* eslint-disable linebreak-style */

const calcAcc = () => {
    const btnAccordion = document.querySelectorAll(`a[data-parent="#accordion"]`),
        collapseOneId = document.getElementById('collapseOne'),
        collapseTwoId = document.getElementById('collapseTwo'),
        collapseThreeId = document.getElementById('collapseThree');
    const collapseFourId = document.getElementById('collapseFour');

    btnAccordion.forEach(elem => {
        elem.addEventListener('click', event => {
            event.preventDefault();
            //One
            if (elem.closest('#headingOne')) {
                if (collapseOneId.style.display === 'none') {
                    collapseOneId.style.display = 'block';
                    collapseTwoId.style.display = 'none';
                    collapseThreeId.style.display = 'none';
                    collapseFourId.style.display = 'none';

                } else {
                    collapseOneId.style.display = 'block';
                }
            }
            //Two
            if (elem.closest('#headingTwo') || elem.matches('.btnOne')) {

                if (collapseTwoId.style.display === 'block') {
                    collapseTwoId.style.display = 'block';

                } else {
                    collapseOneId.style.display = 'none';
                    collapseTwoId.style.display = 'block';
                    collapseThreeId.style.display = 'none';
                    collapseFourId.style.display = 'none';
                }
            }
            //Three
            if (elem.closest('#headingThree') || elem.matches('.btnTwo')) {

                if (collapseThreeId.style.display === 'block') {
                    collapseThreeId.style.display = 'block';

                } else {
                    collapseOneId.style.display = 'none';
                    collapseTwoId.style.display = 'none';
                    collapseThreeId.style.display = 'block';
                    collapseFourId.style.display = 'none';
                }
            }
            //Four
            if (elem.closest('#headingFour') || elem.matches('.btnThree')) {

                if (collapseFourId.style.display === 'block') {
                    collapseFourId.style.display = 'block';

                } else {
                    collapseOneId.style.display = 'none';
                    collapseTwoId.style.display = 'none';
                    collapseThreeId.style.display = 'none';
                    collapseFourId.style.display = 'block';
                }
            }

        });

    });

};

export default calcAcc;
