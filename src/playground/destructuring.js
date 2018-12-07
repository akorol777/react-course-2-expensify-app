const person = {
  name: 'Andrii',
  age: 30,
  location: {
    city: 'Kiev',
    temp: 45
  }
};

const {name, age} = person;
const {city, temp: newt = '34'} = person.location;


const address = ['Some address', 'Some city', 'Some other', '666'];
const [, , , street, cityNew = 'test'] = address;

console.log(street);
console.log(cityNew);

const add = ([a, b], c) => {
  return a + b + c;
};
console.log(add([1, 2], 10));

const add2 = ({a, b}, c) => {
  return a + b + c;
};
console.log(add2({a: 1, b: 2}, 10));
