import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import CardDeck from 'react-bootstrap/CardDeck';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "item.title",
            imageUrl: "item.image_url",
            description: "item.description",
            beastArryFromMain: this.props.beastArry
        }
    }

    submitForm = (event) => {
        let filteredArr = [];
        let option = event.target.value;
        if (parseInt(option)) {
            filteredArr = this.props.beastArry.filter((item) => {
                if (item.horns == parseInt(option)) {
                    return item;
                } console.log(filteredArr);
            })
        }
        else {
            filteredArr = this.props.beastArry;
        }

        this.setState({
            beastArryFromMain: filteredArr
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
                <div>
                    <div className="container">
                        <div className="row">
                            <CardDeck>
                                {this.state.beastArryFromMain.map((item, idx) => {
                                    return (
                                        <HornedBeast
                                            key={idx}
                                            title={item.title}
                                            imageUrl={item.image_url}
                                            description={item.description}
                                            horns={item.horns}
                                            showModal={this.props.showModal}
                                        />
                                    )

                                })}
                            </CardDeck>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Main;