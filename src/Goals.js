import React from 'react';

function Goals({goal, info}){
    return(
        
        <article className="goal-article-item" onClick={ () => info(goal) }>
            <h2>{ goal.title }</h2>
            <p>{ goal.description }</p>
        </article>
    )
}

export default Goals;