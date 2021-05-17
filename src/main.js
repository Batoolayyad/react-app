import React from 'react';
import HornedBeast  from './HornedBeast.js';
import dataHorned from './dataHorned.json'

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
                {dataHorned.map(item=>{
                    return(
                        <HornedBeast
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