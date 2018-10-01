import React, { Component } from 'react';
import { BrowserRouter,Route , Switch } from 'react-router-dom';
import Home from './Home';
import history from './History';
import Erreur from './Erreur'
import Navigation from './Navigation'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <Navigation />
            <Switch>

            <Route exact path ="/" component={Home}/>
            <Route path="/notre-histoire" component={history}/>
            <Route component={Erreur} />
            
            </Switch>
            </div>
            
            
            
            </BrowserRouter>
              
              
           
             
           
        );
    }
}

export default App;