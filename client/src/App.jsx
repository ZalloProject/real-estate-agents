import React from 'react';
import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';
import Featured from './components/Featured.jsx';
import Review from './components/Review.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <NavBar />
        <Search />
        <Featured />
        <Review />
        <Footer />
      </div>
    )
  }
}


export default App;