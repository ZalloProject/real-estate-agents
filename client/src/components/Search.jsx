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
      advancedView: !prevState.advancedView
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
              <option>Buying or Selling</option>
              <option>Buying a Home</option>
              <option>Selling a Home</option>
            </select>
            <span className="searchAdvanced">
              <button className="searchButton"
              onClick={this.handleClick}>
                Advanced
              </button>
              {this.state.advancedView ? (
                <span className="searchAdvancedContainer">
                  <span className="searchAdvancedText">
                    <h4>Home Type</h4>
                    <h4>Home Price</h4>
                    <h4>Languages</h4>
                    <h4>Specialties</h4>
                  </span>
                  <select name="Any">
                    {homeType.map(item => <option>{item}</option>)}
                  </select>
                  <select name="Min">
                    {money.map(item => <option>{"Min"+item}</option>)}
                  </select>
                  <select name="Max">
                    {money.map(item => <option>{"Max"+item}</option>)}
                  </select>
                  <select name="Any">
                    {specialties.map(item => <option>{item}</option>)}
                  </select>
                </span>
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

let homeType = [
  'Any',
  'Houses',
  'Apartments',
  'Condos/Co-Ops',
  'Townhomes',
  'Manufactured',
  'Lots/Land'
]

let money = [
  ":",
  ':$50K', 
  ':$75K',
  ':$100K',
  ':$100K', 
  ':$150K',
  ':$200K', 
  ':$250K',
  ':$300K',
  ':$400K',
  ':$500K',
  ':$1M',
  ':$5M'
]

let specialties = [
  'Any',
  "Buyer's Agent",
  'Listing Agent', 
  'Relocation',
  'Foreclosure',
  'Short Sale',
  'Consulting',
  'Other'
]

export default Search