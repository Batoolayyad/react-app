import React from 'react';
import HornedBeast  from './HornedBeast.js';
import DataHorned from './asset/data.json';

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
                {DataHorned.map((item,idx)=>{
                    return(
                        <HornedBeast
                        key={idx}
                        title={item.title}
                        imageUrl={item.image_url}
                        description={item.description}
                        />
                    )

                })}
            </>
        )
    }
}
export default Main;