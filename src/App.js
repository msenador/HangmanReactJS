import React from 'react'
import './App.css'
import Home from './components/Home'
import GetWord from './components/GetWord'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'


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
          <div><Link to='/'><button>Home</button></Link></div>
            <div className="App">
              <h1 className="Header">
                Let's play HANGMAN!
              </h1>
            </div>
            
            <div className="newGameBtn"><Link to='/GetWord'><button>New Game</button></Link></div>
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
