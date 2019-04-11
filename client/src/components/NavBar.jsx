import React from 'react'

class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
      view: 'default'
    }
  }


  render(){
    return(
      <div className="navBar">
        <span className="agents">Agents</span>
        <span className="homeImprovement">Home Improvement</span>
        <span className="propManagers">Property Managers</span>
        <span className="builders">Builders</span>
        <span className="inspectors">Inspectors</span>
        <span className="photographers">Photographers</span>
        <span className="other">Other</span>
      </div>
    )
  }
}

export default NavBar