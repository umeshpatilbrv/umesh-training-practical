'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const open_Modal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close_Modal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', open_Modal);

btnCloseModal.addEventListener('click', close_Modal);
overlay.addEventListener('click', close_Modal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close_Modal();
  }
});
