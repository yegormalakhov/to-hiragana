import "./App.css";
import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import ConvertedText from "./ConvertedText";

function App() {
  const [originalText, setOriginalText] = useState();
  const [convertedText, setConvertedText] = useState();

  function handleOriginal(event) {
    event.preventDefault(originalText);
    setConvertedText(originalText);
  }

  function handleText(e) {
    const inputText = e.target.value;
    setOriginalText(inputText);
  }

  useEffect(() => {
    
  }, [originalText]);

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
      </div>
    </div>
  );
}

export default App;
