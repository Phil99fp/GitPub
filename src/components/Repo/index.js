import React, {useState} from "react";
import repoNogLogo from "../Images/repoNogLogo"
import './index.css'

const Repo = ({ user, results }) => {
   
  const [RepoInfo, showRepoInfo] = useState(false);
  
 
  const displayResults = results.map((eachRepo) => {
    if (eachRepo.private === false) {
      eachRepo.private = "public"
    } else if (eachRepo.private === true) {
      eachRepo.private = "private";
    } 
    const link = `https://www.github.com/${eachRepo.full_name}`;

    return (
      <>
        <div className="wholeRepo">
          <div className="eachRepo" key={eachRepo.name}>
            <h2>{eachRepo.name}</h2>
            <div>
              <h3> &#11088; {eachRepo.stargazers_count}</h3>
              <h3> &#127860; {eachRepo.forks_count}</h3>
              <h3> &#128191; {eachRepo.open_issues}</h3>
            </div>
            <div className="public"> {String(eachRepo.private)}</div>
          </div>
          <a target="_blank" href={link}>
            <img src={repoNogLogo}></img>
          </a>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <ul>{displayResults}</ul>
      </div>
    </>
  );
};

export default Repo;

