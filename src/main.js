import React from 'react';
import HornedBeast  from './HornedBeast';
//import DataHorned from './asset/data.json';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'item.title',
            imageUrl:'item.image_url',
            description: 'item.description',
        }
    }

    render(){
        return (
            <>
                {this.porps.BeastArry.map((item,idx)=>{
                    return(
                        <HornedBeast
                        key={idx}
                        title={item.title}
                        imageUrl={item.image_url}
                        description={item.description}
                        showModal={item.props.showModal}
                        />
                    )

                })}
            </>
        )
    }
}
export default Main;