import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review =({agents = []}) => {
  return(
    <div>
    <span className="reviewText">
      <h5>
        REVIEWS IN PHOENIX
      </h5>
      <select name="SORT BY: MOST ACTIVE">
        <option>Most active</option>
        <option>Most recent sales</option>
        <option>Best local reviews</option>
        <option>Most listings</option>
      </select>
      <h5>
        CLIENT REVIEW
      </h5>
    </span>
    <div className="agentContainer">
    {agents.map((agent, idx) => {
      return(
        <span className="reviewAgentContainer"
        key={idx}>
          <span className="reviewImage">
            <img src={agent.agent_photo}/>
          </span>
          <span className="reviewName">
            {agent.agent_name}
          </span>
          <span className="reviewPhone">
            {agent.phone}
          </span>
          <span className="reviewStars">
            <StarRatingComponent 
            className="reviewAgentStars"
            name="rate1" 
            starCount={5}
            starColor={"#3dca59"}
            emptyStarColor={"white"}
            value={agent.average_stars}/>
          </span>
          <span className="reviewNumberReviews">
            {agent.num_ratings}
          </span>
          <span className="reviewNumberReviewsLocal">
            {agent.num_local_ratings}
          </span>

          <div className="reviewMapContainer">
            <span className="topText">
              <img src=""></img>
            </span>
            <span className="reviewNumberReviewsLocal">
              {agent.num_local_ratings}
            </span>
            <span className="reviewNumberRecentSales">
              {agent.recent_sales}
            </span>
            <span className="reviewNumberListings">
              {agent.num_listings}
            </span>
          </div>

          <div className="reviewReviewsContainer">
            <span className="reviewDate">
              {"Review " + agent.review_date + ":"}
            </span>
            <span className="reviewReviewsText">
            {agent.review_text}
            </span>
            <span className="pointyArrow"></span>
          </div>

      </span>
      )
    })}
    </div>
    </div>
    )
}

export default Review