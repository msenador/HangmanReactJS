import React from 'react'

class StartPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <>
            <button id="startBtn" name="startGame">Start Game</button>
            </>
        )
    }
}

export default StartPage;