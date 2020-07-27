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
            const collapsDispaly = (one, two, three, four) => {
                if (one.style.display === 'block') {
                    one.style.display = 'block';

                } else {
                    two.style.display = 'none';
                    one.style.display = 'block';
                    three.style.display = 'none';
                    four.style.display = 'none';
                }
            };
            if (elem.closest('#headingTwo') || elem.matches('.btnOne')) {
                collapsDispaly(collapseTwoId, collapseOneId, collapseThreeId, collapseFourId);
            }
            if (elem.closest('#headingThree') || elem.matches('.btnTwo')) {
                collapsDispaly(collapseThreeId, collapseOneId, collapseTwoId, collapseFourId);
            }
            if (elem.closest('#headingFour') || elem.matches('.btnThree')) {
                collapsDispaly(collapseFourId, collapseOneId, collapseTwoId, collapseThreeId);
            }

        });

    });

};

export default calcAcc;
