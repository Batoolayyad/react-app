import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          numberOfPic: 0,
        }
        console.log();
      }
      increaseNumberOfPic = () => {
        this.setState({
          numberOfPic: this.state.numberOfPic + 1,
        })
      }
    
    // render (){
    //     return(
        
    //         <div className='hornedBeast'>
    //             <h2>{this.props.title}</h2>
    //             <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
    //             <p>{this.props.description}</p>
    //         </div>
    //     )
    //     }
    // }
    showModalFun =()=>{
      this.props.showModal(this.props.title)
  }
    render() {
        return (
          <div>
            <div className="col-md-4 col-12 mt-5 mx-auto">
            <Card style={{ width: '20rem', height:'35rem' }} onClick={this.showModalFun}>
              <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} height={"300px"} width={"300px"} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                🤩 Votes {this.state.numberOfPic}
                </Card.Text>
                <Card.Text>
                {this.props.description}
                </Card.Text>
              </Card.Body>
              <Button variant="primary" onClick={this.increaseNumberOfPic} > Vote </Button>
            </Card>
          </div>
        </div>
        )
      }
    }
export default HornedBeast;