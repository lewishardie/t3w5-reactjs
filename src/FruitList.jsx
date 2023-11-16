//-- Array of fruit names

let someFruit = [
    "mangoes",
    "pears",
    "oranges",
    "bananas",
    "strawberries",
    "apples"
  ];

export default function FruitList () {
    //-- It's not a good practise to use index as a key, if its an array of objects, use the object id as a key
    // let fruitListItems = someFruit.map(((fruit, index) => <li key={fruit}>{fruit}</li>))
    let fruitListItems = someFruit.map((fruit => <li key={fruit}>{fruit}</li>))
    return fruitListItems;
}

// module.exports = {FruitList}