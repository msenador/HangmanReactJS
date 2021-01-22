import React from 'react'
import BoardLayout from './Board'
import '../css/GetWord.css'
import { Button } from '@material-ui/core';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class GetWord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            secretWord: '',
            splitWord: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let split = this.state.secretWord.split('')
        // for (let i = 0; i < split.length; i++){
        //     this.state.splitWord.push(split[i])
        // }
    }

    render(){
        return(
            <div className="getWordPage">
                <Router>
                    <form onSubmit={this.handleSubmit}>
                        <div>Enter the secret word!</div>
                        <input onChange={(e) => {this.setState( {secretWord: e.target.value.toUpperCase().split('')})}} id="secretWord" name="secretWord" type="password">
                        </input>
                            <br/>
                                <div className="wordSubmitBtn"><Link to='/Board'><Button color="primary" type="submit">submit</Button></Link></div>
                                <Switch>
                                    <Route exact path='/Board'><BoardLayout split={this.state.secretWord}/></Route>
                                </Switch>
                    </form>
                 </Router>
            </div>
        )
    }
}

export default GetWord;