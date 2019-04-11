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
      agents: (fakeAgents)
    }
  }


  // componentDidMount(){
  //   fetch('/real-estate-agent-reviews', {
  //     method: 'GET'
  //   })
  //   .then(res => res.json())
  //   .then(agents => {
  //     this.setState({
  //       agents: agents
  //     })
  //   })
  // }

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


const fakeAgents = [{"_id":"5ca263803c074d4ae8655050","agent_name":"Maya Mcclain","recent_sales":71,"phone":"(770) 021-3710","agent_type":"listing","average_stars":5.44,"num_ratings":110,"agent_photo":"https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor4.jpg","__v":0},{"_id":"5ca263803c074d4ae865507e","agent_name":"Cayson Oneil","recent_sales":53,"phone":"(071) 626-0346","agent_type":"premier","average_stars":3.26,"num_ratings":1,"agent_photo":"https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor50.jpg","__v":0},{"_id":"5ca263803c074d4ae86550a1","agent_name":"Ruby-Leigh Kirkpatrick","recent_sales":44,"phone":"(462) 505-1255","agent_type":"premier","average_stars":3.39,"num_ratings":283,"agent_photo":"https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor85.jpg","__v":0},{"_id":"5ca263803c074d4ae8655086","agent_name":"Jamila Andrew","recent_sales":9,"phone":"(362) 741-7224","agent_type":"premier","average_stars":3.74,"num_ratings":257,"agent_photo":"https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor58.jpg","__v":0}]

export default App;