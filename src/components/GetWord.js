import React from 'react'

class GetWord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            secretWord: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const word = document.getElementById('secretWord').value
        this.setState({secretWord: word})
        console.log(this.state.secretWord)
    }

    render(){
        return(
            <>
            <h1>Enter the secret word!</h1>
            <form onSubmit={this.handleSubmit}>
            <input onChange={(e) => {this.setState({secretWord: e.target.value})}}id="secretWord" name="secretWord" type="password"></input>
            <button type="submit">submit</button>
            </form>
            </>
        )
    }
}

export default GetWord;