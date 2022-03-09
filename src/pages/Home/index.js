import React, { useEffect, useState } from "react";
import { Search, Repo, Bottles } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getResult } from "../../actions";
import axios from "axios";

function Home() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([{ name: "" }]);

  // const getResult = (searchTerm) => {
  //   return async () => {
  //     try {
  //       console.log("anything")
  //       const githubInfo = await axios(
  //       `https://api.github.com/users/${searchTerm}/repos`)
  //       console.log("hello");
  //       setRepo(githubInfo.data)
  //       console.log(repo.data)
  //     } catch (err) {
  //       console.warn(err.message);
  //     }
  //   };
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("anything");
    const githubInfo = await axios(
      "https://api.github.com/users/" + username + "/repos"
    );
    console.log("hello");
    console.log(githubInfo.data);

    setRepos(githubInfo.data);

    console.log(repos);

    //setUsername('')
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  return (
    <>
    <Bottles/>
      <section>
        <form role="form" onSubmit={handleSubmit}>
          <label htmlFor="usernameSearch">Username: </label>
          <input
            id="usernameSearch"
            role="username"
            type="text"
            value={username}
            onChange={updateInput}
          />
          <input type="submit" value="Search" />
        </form>

        <p>
          Lorem ipsum dolor sit amet. Ad omnis esse aut ullam obcaecati qui quas
          voluptatem qui error
        </p>
        <Repo user={username} results={repos} />
      </section>
    </>
  );
}

export default Home;

// const dispatch = useDispatch();
//  const search = (searchTerm) => dispatch(getResult(searchTerm));

// const [ github, setGithub ] = useState("");

// const [statusMessage, setStatusMessage] = useState("Loading");

// useEffect(() => {
//   const fetchGithub = async () => {
//     setStatusMessage("Loading");
//     try {
//       let { data } = await axios.get(
//         `https://api.github.com/users/phil99fp/repos`
//       );
//       console.log(data)
//       setGithub(data[0])
//       setStatusMessage("");
//     } catch (err) {
//       console.warn(err);
//       setStatusMessage(`Oops there\'s been an issue! ${err.message}`);
//     }
//   };
//   fetchGithub();
// }, []);
// console.log(github)
