import React from 'react'

const Review =({agents}) => {
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
      
    </div>
    </div>
    )
}

export default Review