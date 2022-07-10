import "./App.css";
import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import ConvertedText from "./ConvertedText";
import ConvertingFunction from "./ConvertingFinction";

function App() {
  const [originalText, setOriginalText] = useState();
  const [convertedText, setConvertedText] = useState();

  function handleText(e) {
    const inputText = e.target.value;
    setOriginalText(inputText);
  }
  function handleOriginal(event) {
    event.preventDefault();
    const resultedText = ConvertingFunction(originalText);
    setConvertedText(resultedText);
  }
  
  return (
    <div className="App">
      <h1>Convert you text to hiragana</h1>
      <div className="Container">
        <TextInput
          submitOriginal={handleOriginal}
          setText={handleText}
          // userInput={originalText}
        />
        <ConvertedText text={convertedText} />
        {/* <ConvertingFunction input={originalText} output={converted} /> */}
      </div>
    </div>
  );
}

export default App;
