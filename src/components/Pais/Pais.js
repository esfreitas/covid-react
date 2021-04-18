import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VoltarLink from "../VoltarLink/VoltarLink";
import api from "../api/api";


class Pais extends Component{
    
        state = {
             pais: [],        
        }    

   async componentWillMount(){
       try{
            const response = await api.get('');

            console.log(response.data);

            this.setState = ({ pais: response.data})

       }catch(error){
            console.log("Não foi possível recuperar os dados on line, tente mais tarde " + error );
       }
    }

    render(){ 
        return(
            <div>
                <div className="row">
                <VoltarLink> </VoltarLink><h1>COVID 19</h1>
                </div>

                <ul>
                    
                                           
                </ul>
                

                
                <div className="conteudo-opcoes">
                    <Link className="opcao-vacina" to='/vacina'>Vacina |</Link> 
                    <Link className="opcao-casos" to='/casos'> Casos</Link>
                </div>
                
            </div>

        );
    }
}

export default Pais;