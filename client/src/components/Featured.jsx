import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Featured = ({agents = []}) => {
  return(
  <div className="featuredOuterContainer">
    <div className="featuredInnerContainer">
      {agents.map((agent, idx) => {
        return(
          <span className="featuredAgentContainer"
          key={idx}>
            <span className="featuredImage">
              <img src={agent.agent_photo}/>
            </span>
            <span className="featuredName">
              {agent.agent_name}
            </span>
            <span className="featuredStars">
              <StarRatingComponent 
              className="featuredAgentStars"
              name="rate1" 
              starCount={5}
              starColor={"#3dca59"}
              emptyStarColor={"white"}
              value={agent.average_stars}/>
            </span>
            <span className="featuredPhone">
              {agent.phone}
            </span>
        </span>
        )
      })}
    </div>
  </div>
  )
}

export default Featured