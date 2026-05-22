export class Modal {

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeFn = () => {
      this.close()
    }
    this.closeButton = this.modal.querySelector('#modal-close-button')
    this.#initOpen(buttonId)
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose()
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.closeFn)
    this.closeButton.removeEventListener('click', this.closeFn)
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open()
    })
  }

  #initClose() { 
    this.overlay.addEventListener('click', this.closeFn)
    
    if (this.shouldCloseOnOverlay) {
      this.closeButton.addEventListener('click', this.closeFn)
    }
  }

}