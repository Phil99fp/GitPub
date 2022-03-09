import axios from "axios";

export const getResult = (searchTerm) => {
  return async () => {
    try {
      const githubInfo = await fetchGit(searchTerm);
      console.log("hello")
      return(githubInfo)
    } catch (err) {
      console.warn(err.message);
    }
  };
};

// Helpers
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
