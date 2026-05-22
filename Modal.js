export class Modal {

  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.querySelector('.overlay');
    this.closeBtn = this.modal.querySelector('.modal_close');
  }

  open() {
    this.modal.classList.add('modal-showed')
    this.overlay.classList.add('overlay-showed')
    this.listenCloseBtn();
    this.listenEscape();
    this.listenOverlay();
  }

  close() {
    this.modal.classList.remove('modal-showed')
    this.overlay.classList.remove('overlay-showed')
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed')
  }

  listenCloseBtn() {
    this.closeBtn.addEventListener('click', () => {
      this.close()
    })
  }

  listenEscape() {
    document.addEventListener('keydown', (event) => {
      if (this.isOpen() && event.key === 'Escape') {
        this.close()
      }
    })
  }

  listenOverlay() {
    this.overlay.addEventListener('click', () => {
      this.close()
    })
  }
  
}