//import sayHello from '../say-hello';

describe('Greeting function', function(){
    it('should return a greeting with a name!', function(){
        expect(sayHello('John Doe')).toBeTrue();
    });
});

describe('Multiplication', function() {
    it('Should multiply two values', function() {
        expect(getmultiply(2,3)).toEqual(6);
    });
});