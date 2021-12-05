(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener(`click`, onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function onBackdropClick(event) {
  
    if (event.currentTarget === event.target) {
      toggleModal();
    }

  }

})();
