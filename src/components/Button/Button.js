import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../../style/button.css';
import PropTypes from 'prop-types';

class Button extends Component {
    
    render(){
        return(
           
                <button className="button" onClick={this.props.press}> {this.props.children} </button>
           
        );
    }
}

export default Button; 
