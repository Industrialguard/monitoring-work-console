/*
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener(`click`, onBackdropClick);

  window.addEventListener(`keydown`, onEscKeyPress)

  function toggleModal() {
    window.addEventListener(`keydown`, onEscKeyPress);
    refs.modal.classList.toggle("is-hidden");
  }

  function onBackdropClick(event) {
  
    if (event.currentTarget === event.target) {
      toggleModal();
    }

  }

  function onEscKeyPress(event) {
    console.log('Это так')
    toggleModal();
  }

})();
*/

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModalBtn);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener(`click`, onBackdropClick);

  function onOpenModalBtn() {
    window.addEventListener(`keydown`, onEscKeyPress);
    refs.modal.classList.remove("is-hidden");
    
  }


  function toggleModal() {
    window.removeEventListener(`keydown`, onEscKeyPress);
    refs.modal.classList.add("is-hidden");
  }

  function onBackdropClick(event) {
  
    if (event.currentTarget === event.target) {
      toggleModal();
    }

  }

  function onEscKeyPress(event) {
    console.log('Это так')
    toggleModal();
  }

})();