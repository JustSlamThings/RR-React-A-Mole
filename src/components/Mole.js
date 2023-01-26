import { useEffect } from 'react'
import moleImg from '../mole.png'
//tried making an assets folder for the picture files but it had an error.

function Mole(props){

    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}



export default Mole