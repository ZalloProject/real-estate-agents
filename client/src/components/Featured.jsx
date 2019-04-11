import React from 'react'

const Featured = ({agents}) => {
  return(
  <div className="featuredOuterContainer">
    {agents ? (
    <div className="featuredInnerContainer">
      {agents.map((agent, idx) => {
        <div>
        return(
          <span className="featuredImage"
            key={idx}>
            {agent.agent_photo}
          </span>
          <span className="featuredName"
            key={idx}>
            {agent.agent_name}
          </span>
          <span className="featuredStars"
            key={idx}>
            {agent.average_rating}
          </span>
          <span className="featuredPhone"
            key={idx}>
            {agent.phone}
          </span>
        )
        </div>
      })}
    </div>
    ) : (
      null
    )}
  </div>
  )
}

export default Featured