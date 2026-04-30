export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getFormValue() {
    return Object.fromEntries(new FormData(this.form).entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
