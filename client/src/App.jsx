import React from 'react';
import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';
import Featured from './components/Featured.jsx';
import Review from './components/Review.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      agents: []
    }
  }

  componentDidMount(){
    fetch('/real-estate-agent-reviews', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(agents => {
      this.setState({
        agents: agents
      })
    })
  }

  render(){
    return(
      <div>
        <NavBar />
        <Search />
        <Featured agents={this.state.agents.slice(0, 3)}/>
        <Review agents={this.state.agents.slice(3)}/>
        <Footer />
      </div>
    )
  }
}


export default App;