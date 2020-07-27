/* eslint-disable linebreak-style */
const moreBtn = () => {
    const shadowBlocks = document.querySelectorAll(`.col-xs-12.col-sm-6.col-md-4`),
        btnAddSentence = document.querySelector('.add-sentence-btn');


    btnAddSentence.addEventListener('click', event => {
        event.preventDefault();
        shadowBlocks.forEach(elem => {
            if (elem.matches('.visible-sm-block') || elem.matches('.hidden')) {
                elem.classList.remove('visible-sm-block', 'hidden');
                btnAddSentence.style.cssText = `transform: scale(0)`;
            }

        });

    });

};


export default moreBtn;
