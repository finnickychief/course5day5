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
  let filteredItems = ingredients.filter(item => item.type === type);

  // Create smoothies out of those items
  const smoothies = filteredItems.map((item, i, array) => {
    if (array[i + 1] !== undefined) {
      // Make sure the last one doesn't try to reference a property
      return `${item.name}-${array[i + 1].name}`;
    }
  });
  return smoothies.slice(0, smoothies.length - 1); // Remove the last item, which will be 'undefined'
}

// Example of call: createSmoothies(ingredients, 'fruit')

// Find each pair of consecutive items where the total number of letters between them is 12 (Ex: 'code' + 'function' = 12). Combine each 12-letter pair into a new hyphenated gibberish 'word' (ex: 'code-function'), and store each combo into a new array. Make sure that the new array contains no empty strings or null items, that the lengtho f each new item in the array is 13, and that the length of the new array itself is also 13. So the final array contains 13 items of 13 characters each.

const words = [
  'forklift',
  'bale',
  'raindrop',
  'mule',
  'code',
  'function',
  'java',
  'fedora',
  'radio',
  'factoid',
  'raspberry',
  'fluke',
  'curveball',
  'fang',
  'boot',
  'fastball',
  'trap',
  'paperclip',
  'pin',
  'food',
  'gondola',
  'fist',
  'bulldog',
  'zebra',
  'fort',
  'kindling',
  'fur',
  'banana',
  'fuse',
  'boat',
  'stapler',
  'fool',
  'cherry',
  'wisdom',
  'fund',
  'artichoke',
  'husk',
  'five',
  'book',
  'fan',
  'code',
  'function',
  'java',
  'fedora',
  'sparks',
  'radio',
  'saxophone',
  'cab',
  'fluke',
  'curveball',
  'cat',
  'fang',
  'javascript',
  'ax',
  'boot',
  'fastball',
  'truck',
  'apples',
  'banana',
  'blueberry',
  'cherry',
  'grape',
  'grapes',
  'garage',
  'kiwi',
  'lemon',
  'orange',
  'doggie',
  'lime',
  'popsicle',
  'violin',
  'mango',
  'nectarine',
  'oranges',
  'peach',
  'bluebird',
  'plum',
  'zipper',
  'pear',
  'papaya',
  'pineapple',
  'raspberry',
  'turkey',
  'giblet',
  'strawberry',
  'toy',
  'tangerine',
  'watermelon',
  'ox',
  'parade'
];

//Write a filter that returns only veggies that start with a C (either lowercase OR uppercase) from the following array. You should end up with ['Carrot', 'Celery', 'cabbage', 'cauliflower', 'Cucumber']

const veggies = [
  'Carrot',
  'Kale',
  'Celery',
  'Lettuce',
  'cabbage',
  'radish',
  'turnip',
  'cauliflower',
  'broccoli',
  'Arugula',
  'Cucumber'
];

// Given the following array of two-word phrases, use map to convert them to camelCase words. The results will be as follows:
// launch app -> launchApp
// deal cards -> dealCards
// register user -> registerUser
// etc

const phrasesArr = [
  'launch app',
  'deal cards',
  'register user',
  'encrypt message',
  'deal blackjack',
  'compare prices',
  'order pizza',
  'parse data',
  'set cookies',
  'read email',
  'update record',
  'hash passwords',
  'choose flavor',
  'send request',
  'handle response',
  'empty cart',
  'toggle autoplay',
  'detect collision',
  'announce winner',
  'play song',
  'swap image',
  'validate form',
  'start blender',
  'apply filter',
  'change direction'
];

// Pluralize words:
/*
  Use map to generate a pluralized list of words. Use the following examples to fill your conversion rules:

  apple -> apples, apricot -> apricots, blueberry -> blueberries, cherry -> cherries, mango -> mangoes, stretch -> stretches, church -> churches


*/

const words = [
  'apple',
  'apricot',
  'banana',
  'blueberry',
  'cherry',
  'church',
  'clementine',
  'dragonberry',
  'elderberry',
  'grape',
  'grapefruit',
  'kiwi',
  'lemon',
  'lime',
  'mango',
  'nectarine',
  'orange',
  'papaya',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'pomegranate',
  'raspberry',
  'strawberry',
  'stretch',
  'tangerine',
  'watermelon'
];
