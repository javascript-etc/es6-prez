// Method definitions
let someView = View.extend({
  init($view) {
    this.id = $view.data('id') || generateId();
  },

  render() {

  }
});
