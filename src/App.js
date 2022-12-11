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
    const resultedText = ConvertingFunction(originalText);
    setConvertedText(resultedText);
  }

  return (
    <div className="App">
      <header className="container">
        <h1 className=" ff-serif text-white uppercase">
          Convert you text to hiragana
        </h1>
      </header>

      <main className="container">
        <TextInput
          submitOriginal={handleOriginal}
          setText={handleText}
          // userInput={originalText}
        />

        <ConvertedText text={convertedText} />

        {/* <ConvertingFunction input={originalText} output={converted} /> */}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
