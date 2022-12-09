import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import ConvertedText from "./ConvertedText";
import ConvertingFunction1 from "./ConvertingFunction1";
import ConvertingFunction from "./ConvertingFunction";
import Footer from "./Footer";

function App() {
  const [originalText, setOriginalText] = useState();
  const [convertedText, setConvertedText] = useState();

  function handleText(e) {
    const inputText = e.target.value;
    setOriginalText(inputText);
  }
  function handleOriginal(event) {
    event.preventDefault();
    const resultedText = ConvertingFunction1(originalText);
    setConvertedText(resultedText);
  }

  return (
    <div className="App flow">
      <header className="container">
        <h1 className=" ff-serif fs-700 text-white uppercase mt-1">
          Convert you text to hiragana
        </h1>
      </header>

      <main className="container grid mt-1">
        <TextInput
          submitOriginal={handleOriginal}
          setText={handleText}
          // userInput={originalText}
        />

        <ConvertedText text={convertedText} />

        {/* <ConvertingFunction input={originalText} output={converted} /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
