import React, { useState } from "react";



const Search = () => {
  const [username, setUsername] = useState("");

  const getResult = (searchTerm) => {
    return async () => {
      try {
        const githubInfo = await fetchGit(searchTerm);
        console.log("hello");
        return githubInfo;
      } catch (err) {
        console.warn(err.message);
      }
    };
  };

  const fetchGit = async (searchTerm) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${searchTerm}/repos`
      );
      console.log("yoooo");
      return data;
    } catch (err) {
      if (data.status === 404) {
        throw Error("That's not a valid username!");
      }
      throw new Error(err.message);
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    getResult(username);
    console.log(getResult(username));
    //setUsername('')
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <label htmlFor="usernameSearch">Username: </label>
      <input
        id="usernameSearch"
        role="username"
        type="text" value = {username}
        onChange={updateInput}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
