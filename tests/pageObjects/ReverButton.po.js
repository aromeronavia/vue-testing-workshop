export default class ButtonPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  get classes() {
    return this.wrapper.classes();
  }

  click() {
    return this.wrapper.trigger('click');
  }

  isPrimary() {
    return this.classes.includes('btn-primary');
  }

  isWarning() {
    return this.classes.includes('btn-warning');
  }

  isDanger() {
    return this.classes.includes('btn-danger');
  }
}
