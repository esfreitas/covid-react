import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/vacina.css';
import Button from "../Button/Button";
import VoltarLink from "../VoltarLink/VoltarLink";

class Vacina extends Component{
    render(){ 
        return(
            <div>
                <h1>Vacina</h1>
                <VoltarLink> </VoltarLink>
                <div className="conteudo-opcoes">
                    <Link className="opcao-vacina" to='/vacina'>Vacina |</Link> 
                    <Link className="opcao-casos" to='/casos'> Casos</Link>
                </div>
            </div>
            
        );
    }
}

export default Vacina;