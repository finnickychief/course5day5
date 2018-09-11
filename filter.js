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

// Print only books that have more than 2 words in their title
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
  }
];

// Expect to get back: Name of the Wind, Wheel of Time, A Song of Ice and Fire
// use split around spaces to count how many words there are
function printLongBookTitles(books) {
  // let longBooks = books.filter(book => book.title.split(' ').length > 2)
  let longBooks = books.filter(book => {
    if (book.title.split(' ').length > 2) {
      // title is longer than 2 words
      return true;
    }
  });
  console.log(longBooks);
}

function printLongBookTitlesAndAuthors(books) {
  // let longBooks = books.filter(book => book.title.split(' ').length > 2)
  let longBooks = books.filter(book => {
    if (book.title.split(' ').length > 2) {
      // title is longer than 2 words
      return true;
    }
  });

  let finalArray = longBooks.map(book => book.title + ' - ' + book.author);

  console.log(finalArray);
}

// Chaining array methods on the same line

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach', 'Pear', 'Plum'];

// Make jellybeans out of the short fruits
// Short fruits are fruits with 5 or less characters
// Jellybeans are fruits with ' Jellybeans' appended
function makeShortJellybeans(inFruits) {
  const jb = inFruits
    .filter(fruit => fruit.length < 6) // Call filter on inFruits
    .map(fruit => `${fruit} Jellybeans`); // Call map on the RESULT of filter
  console.log(jb);
}

// Map then filter - Convert prices to numeric values then see if they're in your price range
const prices = ['20.00', '25.25', '17.35', '10.00', '300'];

function findItemsInPriceRange(inPrices) {
  let affordableItems = inPrices
    .map(price => Number(price)) // Convert string values into numbers
    .filter(price => price < 20); // Return items that cost less than $20
  return affordableItems;
}

// Create smoothies based on whether or not the item is a vegetable or a fruit

// Create an array similar to the following one using a map:
// const ingredients = [
//   {
//     name: 'Apple',
//     type: 'fruit'
//   },
//   {
//     name: 'Carrot',
//     type: 'vegetable'
//   }
// ];
const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach', 'Pear', 'Plum'];
const vegetables = ['Carrot', 'Cucumber', 'Cauliflower', 'Cabbage', 'Corn'];

// Create fruits object array
const fruitObjects = fruits.map(fruit => {
  return { name: fruit, type: 'fruit' };
});
// Create vegetables object array
const veggieObjects = vegetables.map(vegetable => {
  return { name: vegetable, type: 'vegetable' };
});

const ingredients = fruitObjects.concat(veggieObjects);

// Write a function that creates 'smoothies' out of the ingredients provided. Only use ingredients that the user requests
function createSmoothies(ingredients, type) {
  // Get all the items of the type
  // Create smoothies out of those items
}
