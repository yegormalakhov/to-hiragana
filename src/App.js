import "./App.css";
import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import ConvertedText from "./ConvertedText";

function App() {
  const [originalText, setOriginalText] = useState();
  const [convertedText, setConvertedText] = useState();

  function handleOriginal(event) {
    event.preventDefault(originalText);
    setConvertedText(conveting(originalText));
  }

  function handleText(e) {
    const inputText = e.target.value;
    setOriginalText(inputText);
  }

  function conveting(text) {
    let input = text;
    let conv = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "a") {
        console.log("あ");
        conv.push("あ");
      } else {
        conv.push(input[i]);
      }
    }
    let convT = conv.join("");
    return convT;
  }
  useEffect(() => {}, [originalText]);

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
