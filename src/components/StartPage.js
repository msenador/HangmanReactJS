import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import GetWord from './GetWord'

class StartPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <>
                <Router>
                    <button id="startBtn" name="startGame">
                        <Link to='/GetWord'>Start Game</Link>
                    </button>

                    <Switch>
                        <Route exact path='/GetWord'><GetWord/></Route>
                    </Switch>


                </Router>
            </>
        )
    }
}

export default StartPage;