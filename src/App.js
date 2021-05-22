import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import DataHorned from './asset/data';
import SelectBeast from './component/SelectBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: DataHorned,
      element: {},
      show: false
    }
  }
  showModal = (parameter) => {
    let chosenElement = DataHorned.find((element) => {
      if (element.title === parameter) {
        return element;
      }
    })

    this.setState({
      element: chosenElement,
      show: true,
    })

  }
  hideModal = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          beastArry={this.state.dataArray}
          showModal={this.showModal}
        />
        <SelectBeast
          element={this.state.element}
          hideModal={this.hideModal}
          show={this.state.show}
        />
        <Footer />
      </>
    )
  }
}
export default App;