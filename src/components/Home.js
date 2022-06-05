import React from "react";
import username from src/components/Home.js;
import city from src/components/Home.js;

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home; 