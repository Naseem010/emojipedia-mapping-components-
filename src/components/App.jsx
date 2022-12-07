import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";
//1.Create entry components
//2.Create props to replace hardcore data.
//3a.import the emojipedia
//3b.map through the emojipedia array and render entry components.
function Entry(emojipedia){
  return(
    <Card 
    key={emojipedia.id}
emoji={emojipedia.emoji}
name={emojipedia.name}
meaning={emojipedia.meaning}
/>
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      { emojipedia.map(Entry)}
       
      </dl>
    </div>
  );
}

export default App;
