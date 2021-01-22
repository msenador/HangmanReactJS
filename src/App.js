import React from 'react'
import './App.css'
import Home from './components/Home'
import GetWord from './components/GetWord'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Button } from '@material-ui/core';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
          <>
          <Router>
          <div><Link to='/'><Button color="primary" variant="contained">Home</Button></Link></div>
            <div className="App">
              <h1 className="Header">
                Let's play HANGMAN!
              </h1>
            </div>
            
            <div className="newGameBtn"><Link to='/GetWord'><Button color="primary" variant="contained">New Game</Button></Link></div>
            <Switch>
              <Route exact path='/'><Home/></Route>
              <Route path='/GetWord'><GetWord/></Route>
            </Switch>
          </Router>
          </>
        )
    }
}

export default App;
