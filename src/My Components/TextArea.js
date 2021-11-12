import React, {useState} from "react";

export const TextArea = () => {

const toUpperCaseValue = () => {
  let newText = text.toUpperCase();
  setText(newText);
}

const toLowerCaseValue = () => {
  let newText = text.toLowerCase();
  setText(newText);
}

const changeValue = (event)=>{
  setText(event.target.value);
}

const copyText = ()=>{
  /* Get the text field */
  var copyGfGText = document.getElementById("floatingTextarea2");
  
  /* Select the text field */
  copyGfGText.select();
  
  /* Copy the text inside the text field */
  document.execCommand("copy");
}

const clearText = () =>{
  setText('');
}

let style = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingEnd : 5,
}

  const [text, setText] = useState('');
  return (
    <>
    <div className="container my-5">
        <h1 className="my-3">Write your text below.</h1>
      <div className="form-floating">
        <textarea
          className="form-control" placeholder="Leave a comment here" value={text}  id="floatingTextarea2" style={{height: 200 + 'px'}} onChange={changeValue}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3 mx-1" onClick={toUpperCaseValue}>Change to UPPERCASE</button>
      <button className="btn btn-primary my-3 mx-1" onClick={toLowerCaseValue}>Change to lowercase</button>
      <button className="btn btn-primary my-3 mx-1" id="clipBoard" onClick={copyText}>Copy to Clipboard</button>
      <button className="btn btn-primary my-3 mx-1" id="clearText" onClick={clearText}>Clear text</button>
    </div>
    <div className="container part-2 d-flex">
      <div className="wordsCount text-center">
        <h2>Number of words : {text.split(" ").length}</h2>
      </div>
      <div className="lettersCount text-center">
        <h2>Number of characters : {text.length}</h2>
      </div>
    </div>
      <div className="container previewAndReadTime my-5">
        <div className="pund text-center my-3">
        <h3 id="previewText">Preview : {Math.ceil(0.008 * text.split(" ").length)} Minutes of read.</h3>
        <div style={style}>
          <div id="underLine"></div>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};
