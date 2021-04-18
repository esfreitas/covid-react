import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

class VoltarLink extends Component {
    
    render(){
        return(
            <div className="area-button">
                <Link className="button" to="/"> Voltar </Link>
            </div> 
        );
    }
}

export default VoltarLink; 
