import React, { Component } from 'react'

class Header extends React.Component {
    render() { 
        return (
            <React.Fragment>

            <nav class="navbar navbar-light">
                <span className="navbar-brand mb-0 h1 navBar">
                    What should I wear in &nbsp;
                    <input id='textareaAdd' className='header' rows='1'></input> 
                    ?
                    <button id="addButton" className='header' onClick={this.props.addBox}>Search</button>
                    <h5 className="error" id="error">Nope, not found!</h5>
                </span>
            </nav>

            </React.Fragment>
        );
    }
}
 
export default Header;