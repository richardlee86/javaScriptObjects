//Create an array of movie objects. Each movie should have a title, rating, and hasWatched property. Iterate through the array and print out something that looks like :

/*You have watched "In Bruges" - 5 stars
 * You have not seen "Frozen" - 5 stars
 * You have seen "Mad Max Fury Road" - 5 stars
 * You have not seen "Les Miserables" - 3.5 stars
 */

var movieDB = [
  {
    title: "Predator",
    rating: "5 Stars",
    hasWatched: false
  },

  {
    title: "The Notebook",
    rating: "3 Stars",
    hasWatched: true
  },

  {
    title: "Ip Man",
    rating: "5 Stars",
    hasWatched: true
  },

  {
    title: "Knives Up",
    rating: "4 Stars",
    hasWatched: false
  }
];

for (var i = 0; i < movieDB.length; i++) {
  if (movieDB[i].hasWatched === true) {
    console.log(
      "You have watched " + movieDB[i].title + " - " + movieDB[i].rating
    );
  } else {
    console.log(
      "You haven't watched " + movieDB[i].title + " - " + movieDB[i].rating
    );
  }
}

console.log("************************");

// Adding methods to Objects:
// We can add functions to objects as properties. These functions are called methods
// This is used so we can have functions named the same without running into namespace collisions

var obj = {
  name: "Richard",
  age: 33,
  knowsJavaScript: false,
  add: function(x, y) {
    return x + y;
  }
};
obj.add(5, 5);

//The Keyword This:

var comments = {};
comments.data = ["Good Job", "You suck!"];

function print(arr) {
  array.forEach(function (el) {
    console.log(el);
  });
}

comments.print = function () {
  //here we use the This keyword to access the data property of the comments object
  this.data.forEach(function (el){
    console.log(el);
  });
}

