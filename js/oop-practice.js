// STEP 1

// function Cat() {}

// const cat = new Cat();
// const dog = new function () {};

// STEP 2
// const cat2 = new Cat();
// const dog2 = new function () {};

// STEP 3
// function Animal() {}
// const animal = new Animal();
// animal.createAnimal = () => console.log('The Animal has been created');
// animal.createAnimal();

// STEP 4
// function Animal(message) {
//   this.message = message;
//   console.log(message);
// }
// const animal = new Animal('The Animal has been created');

// STEP 5
// function Animal(type, breed, color, height, length) {
//   this.type = type;
//   this.breed = breed;
//   this.color = color;
//   this.height = height;
//   this.length = length;
// }
// const animal = new Animal('Dog', 'Chihuahua', 'Brown', '1ft', '1ft 5in');

// STEP 6
// for (property in animal) {
//   console.log(property);
// }

// STEP 7

// function Animal(type, breed, color, height, length) {
//   this.type = type;
//   this.breed = breed;
//   this.color = color;
//   this.height = height;
//   this.length = length;

//   this.speak = () => {
//     const type = this.type.toLowerCase();
//     const color = this.color.toLowerCase();
//     if (type === 'dog') {
//       console.log(`The ${color} dog is barking!`);
//     } else if (type === 'cat') {
//       console.log(`The ${color} cat is meowing!`);
//     }
//   };
// }
// const animal = new Animal('Cat', 'Calico', 'Orange', '1ft 3in', '1ft 5in');
// animal.speak();

// STEP 8

// function Animal(type, breed, color, height, length) {
//   const _type = type;
//   const _breed = breed;
//   const _color = color;
//   const _height = height;
//   const _length = length;

//   const checkType = () => {
//     if (_type.toLowerCase() === 'dog') {
//       return 'dog';
//     } else if (_type.toLowerCase() === 'cat') {
//       return 'cat';
//     }
//   };

//   this.speak = () => {
//     console.log(`The ${checkType()} has made a noise!`);
//   };
// }
// const animal = new Animal('Cat', 'Calico', 'Orange', '1ft 3in', '1ft 5in');
// animal.speak();

// STEP 9
// String.prototype.findWords = (input, word) => {
//   window.alert(
//     `The word ${word} was found ${
//       Array.from(input.matchAll(word)).length
//     } times!`
//   );
// };

// const inp =
//   'Dolore shank duis prosciutto sausage ut nostrud ex pork chop pork loin cow eiusmod chuck brisket shankle. Ipsum ut eu fugiat, ut ball tip shankle short loin spare ribs ham shoulder. Mollit pork loin drumstick, in proident strip steak cupim picanha kielbasa adipisicing cillum enim cow short loin. Shankle turkey commodo ex voluptate, magna incididunt.';

// String.prototype.findWords(inp, 'pork');
