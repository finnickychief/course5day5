/*
  Filter array method
    Gives you back an array of the same or less length
    Applies a filter to an array based on the condition within the callback
    If the callback returns a truthy value; add the item to the new array
    If the callback returns falsy value; skip that item.

    By default, filter does not modify the items.

  The structure of the function when you call it is the same as map:
    Provide a callback with 1-3 parameters
      1: The item
      2: The index
      3: The array

*/

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Mango',
  'Orange',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Strawberry',
  ''
];
// Create a new array where each item is fruits with less than 6 characters in their name

let shortFruits = fruits.filter(item => {
  if (item.length < 6) {
    return true;
  } else {
    return false;
  }
});

let shorterFruits = fruits.filter(fruit => fruit.length < 6); // Adds in empty strings because we don't check for them

let shorterFruits = fruits.filter(fruit => {
  if (!fruit) {
    // Check for falsy values
    return false;
  } else {
    return fruit.length < 6;
  }
});

// Filter example: Count the number of vowels in a string
function vowels(inputString) {
  const vowelListStr = 'aeiou';

  inputString = inputString.toLowerCase();

  const stringArr = inputString.split('');

  const vowels = stringArr.filter(char => vowelListStr.includes(char));
  return vowels.length;
}

//Map example: Capitalize the first character in each word
// Convert the following example to map
function capitalize(sentence) {
  // Get the individual words
  let words = sentence.split(' ');

  // Capitalize the first character in each word
  words = words.map(word => word[0].toUpperCase() + word.slice(1));

  return words.join(' ');
}

// Print only books that have more than 2 words in their name
const bookArray = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Name of the Wind',
    author: 'Patrick Rothfuss'
  },
  {
    title: 'Wheel of Time',
    author: 'Robert Jordan'
  },
  {
    title: 'A Song of Ice and Fire',
    author: 'George RR Martin'
  } //
];
