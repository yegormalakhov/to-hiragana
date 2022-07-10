function TextInput({ submitOriginal, setText, userInput }) {
  return (
    <div className="formContainer">
      <form onSubmit={submitOriginal}>
        <p>Original text</p>
        <textarea
          id="nativeText"
          type="text"
          // value={userInput}
          onChange={setText}
          name="originalText"
          rows="30"
          col="50"
          placeholder="Here shoul be your texts"
        ></textarea>
        <br />
        <input
          type="submit"
          value="Submit and convert"
          className="submit-btn"
        />
      </form>
    </div>
  );
}
export default TextInput;
