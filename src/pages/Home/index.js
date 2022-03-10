import React, { useEffect, useState } from "react";
import { Repo, Bottles } from "../../components";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

function Home() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([{ }]);
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  const getResult = async () => {
    try {
      console.log("anything");
      const githubInfo = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      console.log("hello");
      console.log(githubInfo.data);
      setRepos(githubInfo.data);
    } catch (err) {
      console.warn(err.message);
      alert("Username not found!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getResult()
    setUsername('')
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  return (
    <>
      <Bottles />
      <section>
        <form role="form" onSubmit={handleSubmit}>
          <label htmlFor="usernameSearch">Github Username: </label>
          <input
            id="usernameSearch"
            role="username"
            type="text"
            value = {username}
            onChange={updateInput}
          />
          <input className="button" type="submit" value="Search" onClick={onClick} />
        </form>
        <br></br>
        <br></br>

        {showResults ? <Repo user={username} results={repos} /> : null}
      </section>
    </>
  );
}

export default Home;

