import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './Navigation.css';


class Navigation extends Component {
    
    render(){
        return(
            <div className ="Navigation" >
            <NavLink to="/" activeClassName="selected">Home</NavLink>
            <NavLink to="/notre-histoire" activeStyle={{fontWeight: 'bold',color: 'red'}}>History</NavLink>
           </div>

        );
    }

}
export default Navigation;