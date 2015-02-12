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


// Rest parameters


// fat arrow


// Template strings are neato

getPath(context, identity, ...props) {
  let key = util.findByIdentity(this._model.get(`!${context}`), identity);
  if (!key) { throw new Error('Unable to findByIdentity'); }

  let path = `!${context}.${key}`;
  props.forEach(function(item) {
    // OLD WAY: path += '.' + item;
    path = `${path}.${item}`;
  });

  console.log(path);
  return path;
}
