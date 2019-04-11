import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      advancedView: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState(prevState => ({
      advancedView: !prevState
    }))
  }

  render(){
    return (
      <div>
        <span className='tinyText'>Arizona Phoenix</span>
        <h1 className="searchTitle">Real Estate Agents in Phoenix, AZ</h1>
        <div className="searchContainer">
          <span className="searchText">
            <h6 id="searchText0">Location</h6>
            <h6 id="searchText1">Name</h6>
            <h6 id="searchText2">Service Needed</h6>
          </span>
          <div className="searchForm">
            <form>
              <label>
                <input type="number" 
                id="searchFormLocation"
                name="location" 
                placeholder="Phoenix, AZ"/>
              </label>
              <label>
                <input type="text" 
                id="searchFormName"
                name="name" 
                placeholder="Agent name"/>
              </label>
            </form>
            <select name="Buying or selling">
              <option value="buyingOrSelling">Buying or Selling</option>
              <option value="buyingAHome">Buying a Home</option>
              <option value="sellingAHome">Selling a Home</option>
            </select>
            <span className="searchAdvanced" onClick={this.handleClick}>
              <button className="searchButton">Advanced</button>
              {this.state.advancedView ? (
                <span></span>
                ) : (
                  null
                )}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Search