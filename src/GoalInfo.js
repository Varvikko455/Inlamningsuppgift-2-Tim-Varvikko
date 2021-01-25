import React from 'react';

function GoalInfo({goal, close}){
    return(
        <article className="goal-article-item" onClick={ () => close('')}>
            <main>{ goal.targets.map(target => {
                return <h1>{target.description}</h1>
            })}
            </main>
        </article>
    )
}

export default GoalInfo;