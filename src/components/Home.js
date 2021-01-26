import { render } from 'enzyme'
import React from 'react'
import '../css/Home.css'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const Home = () => {

    return(
        <>
        <div data-testid='startHeader' className="startHeader">Start a new game!</div>
        {/* <Router>
            <Link to='/GetWord'><button>New Game</button></Link>
            <Switch>
              <Route path='/GetWord'><StartPage/></Route>
            </Switch>
          </Router> */}
        </>
    )
}

export default Home;

