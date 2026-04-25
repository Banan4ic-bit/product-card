export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getFormData() {
    return Object.fromEntries(new FormData(this.form).entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  resetFormData() {
    this.form.reset();
  }
}
