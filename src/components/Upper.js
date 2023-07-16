import React, { useState } from "react";

export const Upper = (props) => {  
  const [text, setText] = useState("sample text");
  const[colorstate,setcolorstate]=useState({
    color: 'white',
    backgroundColor: 'black'
  });
  const changecolor = () => {
    if (colorstate.backgroundColor === 'white') {
      setcolorstate({
        color: 'white',
        backgroundColor: 'black'
      });
    } else {
      setcolorstate({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperState = () => {
    setText(text.toUpperCase());
  };

  const handleLowerState = () => {
    setText(text.toLowerCase());
  };

  const EmailExtractor = () => {
    if (text !== "") {
      const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
      const emails = text.match(emailRegex);
      if (emails !== null && emails.length > 0) {
        const separatedEmails = emails.join("\n");
        setText(separatedEmails);
      }
    }
  };
  return (
    <div style={colorstate}>
    <div className="form-check form-switch container d-flex justify-content-end mt-2">
    <input className="form-check-input"type="checkbox"id="flexSwitchCheckDefault"checked={colorstate.backgroundColor === 'black'}onChange={changecolor}
/>
  <label className="form-check-label" for="flexSwitchCheckDefault"> Dark mode </label>
  </div>
    <div className="container mt-2">
      <label htmlFor="exampleFormControlTextarea1">{props.text}</label>
      <textarea
        className="form-control mt-4"
        value={text}
        onChange={handleOnChange}
        id="myBox"
        rows="5"
      ></textarea>
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={handleUpperState}
      >
        Upper
      </button>

      <button
        type="button"
        className="btn btn-primary mt-2 mx-5"
        onClick={handleLowerState}
      >
        Lower
      </button>

      <button
        type="button"
        className="btn btn-primary mt-2 mx-2"
        onClick={EmailExtractor}
      >
        Email Extractor
      </button>
    </div>
    </div>
  );
};
