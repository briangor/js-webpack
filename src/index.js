const sayHello = require('./say-hello');
require('./style.scss');

sayHello('Trump', document.querySelector('h2'));

let h1 = document.querySelector('h1');
h1.innerHTML = 'Welcome to Webpack. Happy Coding!';
const studentName = 'Kylo';
console.log(studentName);

 