//require('./style.scss');

let el = document.querySelector('h2');

function sayHello(name) {
    console.log(name);
    if (el !== null) {
        el.innerHTML = 'Hello ' + name + '!';
    }
    return true;

}
sayHello('Skywalker');

// let h1 = document.querySelector('h1');
// h1.innerHTML = 'Welcome to Webpack. Happy Coding!';

function getmultiply(a, b) {
    return a * b;
}