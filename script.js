//instead of creating an object with an array, we can create an actual Object in JavaScript
var person = {
  name: "Richard",
  age: "33",
  city: "Bitburg"
};

//to access properties of an object:
console.log(person["name"]);
//or
console.log(person.name); //can't use this if the property starts with a number or contains a space

//updating data
var person = {
  name: "Richard",
  age: "33",
  city: "Bitburg"
};
person.age = 34;
person.name = "Birthe";
person.city = "Trier";

//Initializing objects
var person = {
  name: "Richard",
  age: "33",
  city: "Bitburg"
};

var person = {};
person.age = 33;
person.name = "Richard";
person.city = "Bitburg";

var person = new Object();
person.age = 33;
person.name = "Richard";
person.city = "Bitburg";

//Nested Objects and Arrays
//Blog post example below displays an array with an Object nested inside of it
var posts = [
  {
    title: "Cats are mediocre",
    author: "Richard",
    comments: ["Awesome post", "terrible post"] //this is an array nested in an object thats nested in an array!
  },
  {
    title: "I agree that cats suck",
    author: "Birthe",
    comments: ["<3", "Yeah!!"]
  }
];

var someObject = {
  friends: [{ name: "Malfoy" }, { name: "Crabbe" }, { name: "Goyle" }],
  color: "baby blue",
  isEvil: true
};
//Write code to retrieve Malfoy from someObject
console.log(someObject.friends[0].name);
