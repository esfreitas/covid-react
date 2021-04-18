import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import VoltarLink from "../VoltarLink/VoltarLink";


class Pais extends Component{
    
        state = {
          
            pais:[]
          
            /* all: { 
                confirmed:0,
                recovered:0,
                deaths:0,
                country:" ",
                population:0,
                life_expectancy:"",
            },
            vacina: {
                popupacao:0,
                pessoasVacinadas: 0,
                pessoasParcialmenteVacinadas: 0,
            },
            casos: { 
                populacao:0,
                confirmados:0,
                recuperados:0,
                mortes:0,
                expectativaDeVida:0,
            },*/
        }

        

    

   async componentWillMount(){
       try{
       /* const response = await fetch("https://covid-api.mmediagroup.fr/v1/cases")
        .then(resultado => resultado.json().then(dados => this.setState(dados)));*/
        const response = await fetch("https://covid-api.mmediagroup.fr/v1/cases");
        const dataJson = await response.json();

        this.setState({pais: dataJson.All});
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
                    <li>{this.state.all.population}</li>
                    <li>{this.state.all.confirmed}</li>
                    <li>{this.state.all.recovered}</li>
                    <li>{this.state.all.deaths}</li>
                    <li>{this.state.all.life_expectancy}</li>
                                 
                                           
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