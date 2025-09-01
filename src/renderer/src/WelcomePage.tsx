import { useState } from 'react'
import Game from './Game'
import SlotAppButton from './components/SlotAppButton'
import DatabaseTest from './DatabaseTest'

const WelcomePage = (): React.ReactElement => {
  const [playerName, setPlayerName] = useState('')
  const [showGamePage, setShowGamePage] = useState(false)
  const [showUserStats, setShowUserStats] = useState(false)

  return (
    <div className="welcome">
      {showGamePage && <Game playerName={playerName} />}
      {showUserStats && <DatabaseTest />}
      {!showGamePage && !showUserStats && (
        <div className="welcome">
          <h1>Welcome!</h1>
          <h4>Please enter your name to get started!</h4>
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <SlotAppButton className="next" text="Next" onClick={() => setShowGamePage(true)} />
          </div>
          <SlotAppButton text="Explore User Stats" onClick={() => setShowUserStats(true)} />
        </div>
      )}
    </div>
  )
}

export default WelcomePage
