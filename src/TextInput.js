function TextInput({ submitOriginal, setText, userInput }) {
  return (
    <form className="input flex" onSubmit={submitOriginal}>
      <h2 className="ff-sans-normal">Original text</h2>
      <textarea
        className="text-area"
        id="nativeText"
        type="text"
        // value={userInput}
        onChange={setText}
        name="originalText"
        rows="30"
        col="45"
        placeholder="Here should be your texts"
      ></textarea>
      <input
        type="submit"
        value="Submit and convert"
        className="submit-btn convert-btn"
      />
    </form>
  );
}
export default TextInput;
