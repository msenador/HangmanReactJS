import React from 'react'
import { Button } from '@material-ui/core';

const BoardLayout = ({split}) => {

    const displayLines = 
        split.map(letter => {
            return(
                letter !== ' ' ? <span> _ </span> : <span> / </span>
            )
        })

    return(
        <>
        <div className="boardPage">
            <hr/>
            <div className="linesDisplay">
                <br/>
                <br/>
                <br/>
            {
                displayLines
            }
            </div>
            <br/>
            <div>Enter a letter to guess!</div>
            <form>
                <input pattern="[A-Za-z]{1}" type='text' placeholder="Enter a letter"></input>
                <br/>
                <div className="enterBtn"><Button color="primary">Enter</Button></div>
            </form>
        </div>
        
        </>
    )
}

export default BoardLayout;