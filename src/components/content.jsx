import React, { Component } from 'react';
import Box from './box';
class Content extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div className='content'>
                    {this.props.boxes.slice(0).reverse().map(box =>
                        <Box box={box}/>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
 
export default Content;