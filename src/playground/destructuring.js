

/*
const person = {
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const {name = 'anonymous', age} = person;

console.log(`${name} is ${age}`);

console.log(`It's ${person.location.temp} in ${person.location.city}`);



const book = {
  title: 'some title',
  author: 'author name',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'self published'} = book.publ;

console.log(publisherName);
*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${address[2]}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00'];
const {beverage,,price} = item;

console.log(`A medium ${beverage} costs ${price}`);
