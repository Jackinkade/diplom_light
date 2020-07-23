/* eslint-disable linebreak-style */
/* eslint-disable indent */
const popupDiscount = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const popupBtn = document.querySelectorAll('.discount-btn');
  const popupBtn2 = document.querySelectorAll('.call-btn');
  const popupBtn3 = document.querySelectorAll('.check-btn');
  const popupBtn4 = document.querySelectorAll('.consultation-btn');


  let count = -200;


  popup.addEventListener('click', event => {
    let target = event.target;
    count = -200;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });

   const openPopup = () => {
      if (document.documentElement.clientWidth <= 768) {
        popupContent.style.transform = `translate(0)`;


          return;
      }

      const requestId = requestAnimationFrame(openPopup);

      count += 20;
      popupContent.style.left = 40 + '%';
      popupContent.style.transform = `translate(${count}%)`;


      if (count >= 0) {
          cancelAnimationFrame(requestId);

      }
  };
  popupBtn2.forEach(elem => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          openPopup();
      });
  });
  popupBtn3.forEach(elem => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          openPopup();
      });
  });
    popupBtn4.forEach(elem => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          openPopup();
      });
  });
  popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          openPopup();
      });
  });
};

export default popupDiscount;
