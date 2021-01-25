import React, { useState, useEffect } from 'react';
import './App.css';

import Goals from './Goals'
import GoalInfo from './GoalInfo'



function App() {

  const [currentGoal, setCurrentGoal] = useState('')

  const [data, setData] = useState([])  
  const getData = () => fetch(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true`).then((response) => response.json())

    useEffect(async () => {
        getData().then((data) => setData(data))
    }, [])
  
  

  return (
    
    <section className="App">
      
      { currentGoal ? 
        <article>
          <h1 className="header-title">United Nations Sub Goals</h1>
          <GoalInfo goal={ currentGoal } close={ setCurrentGoal }/> 
        </article>
        
        
        :
        
        <main>
        <h1 className="header-title">United Nations Goals</h1>
        { data.map(goal => {
        return <Goals goal={ goal } info={ setCurrentGoal }/>
        })};
        </main>
      
      }
    </section>
  );
}

export default App;
