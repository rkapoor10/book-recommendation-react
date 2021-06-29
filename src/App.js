import React, { useState } from "react";
import { ReactComponent as Books } from "./images/books.svg";
import "./styles.css";
// var userName = prompt("ENTER YOUR NAME:");

var business = ["ReWork", "Zero to One", "MBA in a Day"];

var genreDictionary = {
  Fiction: ["Harry Potter Series", "Brave New World"],
  Business: business,
  JavaScript: ["Elequent Javasricpt", "You Don't know JS"]
};
var books = [];

var genres = Object.keys(genreDictionary);
export default function App() {
  var [book, setBook] = useState("");

  function genreClickHandler(genre) {
    book = genreDictionary[genre];
    books = book;
    setBook(book);
  }

  return (
    <div className="App">
      <div>
        <Books />
      </div>
      <h1>The Library</h1>
      <p>Welcome to this recommendation app. I hope you find a good one</p>
      <hr />
      <h3>
        {genres.map(function (genre) {
          return (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          );
        })}
      </h3>

      <div id="container">
        {books.map((display) => {
          return <li id="display">{display}</li>;
        })}
      </div>
    </div>
  );
}
