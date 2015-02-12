/* ## Topics to cover
*/

// setting up dummy vars
var View;
var generateId = function() {};


// Method definitions
var someView = View.extend({
  init($view) {
    this.id = $view.data('id') || generateId();
  },

});


// Getters/Setters
var Nascar = {
  driverName: 'Gordon',
  get name() { return this.driverName; },
  set name(n) { this.driverName = n; }
};

console.log(Nascar.name); // 'Gordon'
Nascar.name('Earnhardt');
console.log(Nascar.name); // 'Gordon'


// Default parameters
