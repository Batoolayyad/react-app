import React from 'react';
import Header from './Header';
import Main from './main'
import Footer from './Footer';
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome To Horned Animals </h1>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
export default App;