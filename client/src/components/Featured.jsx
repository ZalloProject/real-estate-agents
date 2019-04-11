import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Featured = ({agents = []}) => {
  return(
  <div className="featuredOuterContainer">
    <div className="featuredInnerContainer">
      {agents.map((agent, idx) => {
        return(
          <span className="featuredAgentContainer">
            <span className="featuredImage"
              key={idx}>
              <img src={agent.agent_photo}/>
            </span>
            <span className="featuredName"
              key={idx}>
              {agent.agent_name}
            </span>
            <span className="featuredStars"
              key={idx}>
              <StarRatingComponent 
              className="featuredAgentStars"
              name="rate1" 
              starCount={5}
              starColor={"#3dca59"}
              emptyStarColor={"white"}
              value={agent.average_stars}/>
            </span>
            <span className="featuredPhone"
              key={idx}>
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