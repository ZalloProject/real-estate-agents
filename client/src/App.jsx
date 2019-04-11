import React from 'react';
import Buy from './components/Buy.jsx';
import Rent from './components/Rent.jsx';
import Sell from './components/Sell.jsx';
import HomeLoans from './components/HomeLoans.jsx';
import AgentFinder from './components/AgentFinder.jsx';
import style from './style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: '', 
    }
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
  }

  handleOnMouseEnter(e){
    let str = e.target.innerText
    this.setState({
      view: str
    })
  }

  render(){
    return(
      <div className={style.superNavContainer}>
        <span className={style.tinyHamburg}></span>
        <Buy 
          view={this.state.view}/>
          <p id={style.superNavTextBuy} 
            onMouseEnter={this.handleOnMouseEnter}>
            Buy
          </p>
        <Rent 
          view={this.state.view}/>
          <p id={style.superNavTextRent}
          onMouseEnter={this.handleOnMouseEnter}>
            Rent
          </p>
        <Sell
          view={this.state.view}/>
          <p id={style.superNavTextSell}
          onMouseEnter={this.handleOnMouseEnter}>
            Sell
          </p>
        <HomeLoans
          view={this.state.view}/>
          <p id={style.superNavTextLoans}
          onMouseEnter={this.handleOnMouseEnter}>
            Home Loans
          </p>
        <AgentFinder
          view={this.state.view}/>
          <p id={style.superNavTextAgent}
          onMouseEnter={this.handleOnMouseEnter}>
            Agent Finder
          </p>
          <img src="https://s3-us-west-2.amazonaws.com/agents-zallo/zalloLogo.jpg" 
            id={style.superNavLogo}
            onMouseEnter={this.handleOnMouseEnter}>
          </img>
          <p 
            id={style.superNavTextRental}
            onMouseEnter={this.handleOnMouseEnter}>
            List your rental
          </p>
          <p 
          id={style.superNavTextAdvertise}
            onMouseEnter={this.handleOnMouseEnter}>
            Advertise
          </p>
          <p 
          id={style.superNavTextSignIn}
            onMouseEnter={this.handleOnMouseEnter}>
            Sign in or Join
          </p>
          <p 
          id={style.superNavTextHelp}
            onMouseEnter={this.handleOnMouseEnter}>
            Help
          </p>
        </div>
    )
  }
}


export default App