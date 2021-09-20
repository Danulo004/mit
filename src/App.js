import React, { useState } from "react";
import "./App.css";
import ClickController from "./controlers/ClickController";

function App() {
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [disableButton, setDisableButton] = useState(false);

  const onClick = async () => {
    setDisableButton(true);
    const newPhotoUrl = await ClickController.onGetPhotoByKeywordsClick(input);

    setPhotoUrl(newPhotoUrl);

    setDisableButton(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from Danylo</p>
        <hr className="hr" />

        <label>Enter Photo aliases:</label>
        <input
          name="fname"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={onClick} disabled={disableButton}>
          Get photos
        </button>

        <hr className="hr" />

        <img src={photoUrl} width="80%" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
