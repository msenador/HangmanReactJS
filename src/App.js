import React from 'react'
import './App.css'
import StartPage from './components/StartPage'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
          <>
            <div className="App">
              <h1 className="Header">
                Let's play HANGMAN!
              </h1>
            </div>
            <div className="startBtn">
                <StartPage/>
            </div>
          </>
        )
    }
}

export default App;
