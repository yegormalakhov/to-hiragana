function TextInput({ submitOriginal, setText, userInput }) {
  return (
    <form className="input flow flex" onSubmit={submitOriginal}>
      <h2 className="ff-sans-normal fs-500">Original text</h2>
      <textarea
        className="text-area"
        id="nativeText"
        type="text"
        // value={userInput}
        onChange={setText}
        name="originalText"
        rows="30"
        col="50"
        placeholder="Here shoul be your texts"
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
