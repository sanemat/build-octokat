var Octokat = require('octokat');
var octo = new Octokat();
octo.zen.read().then(function (value) {
  console.log(value);
});
