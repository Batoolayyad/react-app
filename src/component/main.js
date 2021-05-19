import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'item.title',
            imageUrl: 'item.image_url',
            description: 'item.description',
            imgNum: this.props.beastArry
        }
    }
    submitForm = (event) => {
        let filteredArr=[];
        let imgNumMain=this.state.imgNum;
        let option = event.target.value;
        if(option){
            filteredArr = imgNumMain.filter((item) =>{
            if (item.horns == option)
            {
             return item;
            }
            })
        }
        else{
            filteredArr = imgNumMain; 
    }
    this.setState({
        imgNumMain: filteredArr,

    })
        }
        

        

    render() {

        return (
            <>
            <Form>
            <Form.Group controlId="formBasicEmail">
                        <Form.Label> Horned Beast Number</Form.Label>
                        <Form.Control as="select" custom onChange={this.submitForm} >
                            <option value="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">woow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            
                {this.imgNumMain.map((item, idx) => {
                    return (
                        <HornedBeast
                            key={idx}
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            showModal={this.props.showModal}
                        />
                    )

                })}
            </>
        )
    }
}
export default Main;