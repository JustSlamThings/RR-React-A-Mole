import './App.css';
import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App() {
  let [score, setScore] = useState(0)

function createMoleHill() {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
      {/* <img src='./green-nature-grass-fields-lawn-HD-Wallpapers-1024x640.jpg' alt='grass splash'/>  
      tried to add a splash image for the background but doesn't seem to work properly. */}
    </div>
  )
}

export default App;
