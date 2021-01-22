import React from 'react'

const BoardLayout = ({split}) => {

    const displayLines = 
        split.map(letter => {
            return(
                letter !== ' ' ? <span> _ </span> : <span>/</span>
            )
        })

    return(
        <>
        <hr/>
        {
            displayLines
        }

        <div>Enter a letter to guess!</div>
        <form>
            <input pattern="[A-Za-z]{1}" type='text' placeholder="Enter a letter"></input>
            <button type="submit">Enter</button>
        </form>
        
        </>
    )
}

export default BoardLayout;