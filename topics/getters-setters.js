// Getters/Setters
var Nascar = {
  driverName: 'Gordon',
  get name() { return this.driverName; },
  set name(n) { this.driverName = n; }
};

console.log(Nascar.name); // 'Gordon'
Nascar.name('Earnhardt');
console.log(Nascar.name); // 'Earnhardt'


