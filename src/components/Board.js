import React, { useState } from 'react'
import { Button } from '@material-ui/core';

const BoardLayout = ({split}) => {

    const [letter, setLetter] = useState()
    const [wordBox, setWordBox] = useState([])

    const displayLetterBox = wordBox ? 
    wordBox.map(item => {
        return(
            <>
                <span>{item}, </span>
            </>
        )
    }) 
    : <div></div>

    // const displaySpaces = split.map(letter => {
    //     return(
    //         letter !== ' ' ? <span> _ </span> : <span> / </span> 
    //     )
    // })

    // const tryAgain = 
    //     split.includes(letter) ? 
    //         <div>The letter {letter} is present!</div>
    //         : <div>The letter {letter} is not present. Please try again.</div>

    // const displayLines = split.map(letter => {
    //     return(
    //         letter !== ' ' ? <span> _ </span> : <span> / </span> 
    //     )
    // })

    const displayLines = split.map(items => {
        return(
            items !== ' ' ? (items === letter ? <span> {letter} </span> : <span> _ </span>) 
            : <span> / </span> 
        )
    })

    const handleSubmit = () => {
        wordBox.push(letter)
        console.log(wordBox)
    }

    return(
        <>
        <br/>
        {
            displayLines
        }
        <br/>
        <br/>
        <div>Guess a letter!</div>
        <form onSubmit={handleSubmit}>
            <input required pattern="[A-Za-z]{1}" type="text" onChange={(e) => {setLetter(e.target.value.toUpperCase())}}></input>
            <br/>
            <Button color="primary" type="submit">Enter</Button>
        </form>

        <br/>
        <div>WORD BOX:</div>
        {
            displayLetterBox
        }
        {/* {
            tryAgain
        } */}

        </>
    )
}

export default BoardLayout;

// class BoardLayout extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             wordBox: [],
//             letterInput: '',
//         }
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//     }

//     // handleChange = (e) => {
//     //     this.setState({letterInput: e.target.value.toUpperCase()})
//     //     this.state.wordBox.push(this.state.letterInput)
//     //     console.log(this.state.wordBox)
//     // }

//     // display = () => {
//     //     this.state.split.map(letter => {
//     //         letter !== ' ' ? <span> _ </span> : <span> / </span> 
//     //     })
//     // }

//     render(){
//         // const display =
//         //         this.state.split.map(letter => {
//         //     letter !== ' ' ? <span> _ </span> : <span> / </span> 
//         // })

//         return(
//         <>
//         <div className="boardPage">
//             <hr/>
//             <div className="linesDisplay">
//                 <br/>
//                 <br/>
//                 <br/>
//             {
//                 console.log(this.state.split)
//             }
//             </div>
//             <br/>
//             <div>Enter a letter to guess!</div>
//             <form onSubmit={this.handleSubmit}>
//                 <input onChange={(e) => {this.setState({letterInput: e.target.value.toUpperCase()})}} pattern="[A-Za-z]{1}" type='text' placeholder="Enter a letter"></input>
//                 <br/>
//                 <div onClicktype="submit" className="enterBtn"><Button color="primary">Enter</Button></div>
//             </form>
//         </div>
//         </>
//         )
//         }

// }

// export default BoardLayout;


// ATTEMPT AT REACT HOOKS WITH INPUT. TOO LAZY TO FIND OUT HOW TO USE SUBMIT RIGHT NOW.
// const BoardLayout = ({split}) => {
//     const [wordBox, setWordBox] = useState([])
//     const [letter, setLetter] = useState('')
//     //const [letter, setLetter] = useInput({letter: useInput[1]})

//     // function useInput(letter) {
//     //     const [inputLetter, setInputLetter] = useState('');
//     //     const input = <input pattern="[A-Za-z]{1}" type='text' placeholder="Enter a letter" onChange={e => setInputLetter(e.target.value)}></input>
//     //     return [inputLetter, input]
//     // }

//     const displayLines = 
//         split.map(letter => {
//             return(
//                 letter !== ' ' ? <span> _ </span> : <span>/</span>
//             )
//         })

//     const displayWordBox =
//         wordBox.forEach(items => items)

//     const handleSubmit = 
//         wordBox.push(letter)
//         console.log(wordBox)


    

//     return(
//         <>
//         <div className="boardPage">
//             <hr/>
//             <div className="linesDisplay">
//                 <br/>
//                 <br/>
//                 <br/>
//             {
//                 displayLines
//             }
//             </div>
//             <br/>
//             <div>Enter a letter to guess!</div>
//             <form onSubmit={(e) =>  handleSubmit}>
//                 <input onChange={(e) => setLetter(e.target.value) } pattern="[A-Za-z]{1}" type='text' placeholder="Enter a letter"></input>
//                 <br/>
//                 <div className="enterBtn" type="submit"><Button color="primary">Enter</Button></div>
//             </form>
//             {/* {setLetter} */}
//             {
//                 displayWordBox
//             }

//         </div>
        
//         </>
//     )
// }

// export default BoardLayout;