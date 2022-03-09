import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  // const dispatch = useDispatch();

  // const handleThing = () => {
  //   dispatch(addThing(textInput));
  //   setTextInput("");
  // };

  const [textInput, setTextInput] = useState("");

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={textInput} onChange={handleInput}></input>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Search;
