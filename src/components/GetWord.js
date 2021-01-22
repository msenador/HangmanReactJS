import React from 'react'

class GetWord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <>
            <h1>Enter the secret word!</h1>
            <input name="secretWord" type="password"></input>
            </>
        )
    }
}

export default GetWord;