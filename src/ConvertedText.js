function ConvertedText({ text }) {
  return (
    <div className="output">
      <h2>Converted text</h2>
      <div className="result">
        <p className="converted text-area">{text}</p>
      </div>
      <button className="save-btn" style={{ marginTop: "1.1rem" }}>
        Save result
      </button>
    </div>
  );
}
export default ConvertedText;
