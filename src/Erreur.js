import React, { Component } from 'react';
import { BrowserRouter,Route , Router, Switch, NavLink, Link, } from 'react-router-dom';


class Erreur extends Component {
    render(){
        return(
            <div>
            Erreur : ce chemin n'existe pas
           </div>

        );
    }

}
export default Erreur;