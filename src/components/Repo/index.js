import React from "react"



const Repo = ({user, results}) => {

  // const resultsCard = ({eachRepos}) => {
  //   const {id, name} = eachRepos
  //    return <h1> {eachRepo.name}</h1>
  // }

  const displayResults = results.map((eachRepo) => {

    
  return (
    <div >
      <ul >
        <li > Name: {eachRepo.name}</li>
        <li >
  
          Stargazers: {eachRepo.stargazers_count}
        </li>
        <li > Forks: {eachRepo.forks_count}</li>
        <li > Issues: {eachRepo.open_issues}</li>
      </ul>
    </div>
  );
  
})

  




  return (
    <>
 
     
        <div>
          <h1> hello world</h1>
          <div >
            {displayResults}
          </div>
        </div>
      
    </>
  );
}

export default Repo


// name, forks, stargazers, issue count
