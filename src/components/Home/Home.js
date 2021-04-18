import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/home.css';
import Button from "../Button/Button";

class Home extends Component{
    
    buscar = () => {
        return 0;
    }
    render(){ 
        return(
            <div>
                <h1>COVID 19</h1>
                
              
                <form>
                    <input type="text" /> <Button press={this.buscar}> Buscar </Button>

                </form>


                
                <div className="conteudo-opcoes">
                    <Link className="opcao-vacina" to='/vacina'>Vacina |</Link> 
                    <Link className="opcao-casos" to='/casos'> Casos</Link>
                </div>
            </div>

        );
    }
}

export default Home;