import React from "react"



const Repo = ({user, results}) => {

  // const resultsCard = ({eachRepos}) => {
  //   const {id, name} = eachRepos
  //    return <h1> {eachRepo.name}</h1>
  // }

  const displayResults = results.map((eachRepo) => {
    
  return (
    <div key={eachRepo.name}>
      <h1> Name: {eachRepo.name}</h1>
      <h2> Stargazers: {eachRepo.stargazers_count}</h2>
      <h2> Forks: {eachRepo.forks_count}</h2>
      <h2> Issues: {eachRepo.open_issues}</h2>
    </div>
  );
  
})


  return (
    <>
 
      
        <div>
          <h1> hello world</h1>
          <div >
            <ul>{displayResults}</ul>
          </div>
        </div>
      
    </>
  );
}

export default Repo


// name, forks, stargazers, issue count
