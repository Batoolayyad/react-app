import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import DataHorned from './asset/data.json';
import SelectBeast from './selectBeast';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataArray: DataHorned,
      element: {},
    }
  }
  showModal=(parameter)=>{
let chosenElement= DataHorned.find((element) =>{
  if (element.title === parameter){
    return element;
  }

})
this.setState({
  element:chosenElement,
  show: true,
})

}
hideModal=(parameter)=>{
  this.showTrue({
show:false,
})
}
  render(){
    return(
      <>
        <Header/>
        <Main
        BeastArry= {this.state.dataArray}
        showModel={this.showModal}
         />
        <SelectBeast
        element={this.state.element}
        hideModal={this.hideModal}
      />
        <Footer/>
      </>
    )
  }
}
export default App;