import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>HELLO</h1>
      <Food fav="kimchi" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="곱창" />
    </div>
  );
}

export default App;
