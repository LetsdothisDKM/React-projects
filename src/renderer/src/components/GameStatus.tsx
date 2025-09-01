import SlotAppButton from './SlotAppButton'
import '../assets/gameStatus.css'
import PointsCounter from './PointsCounter'
import { useEffect } from 'react'

interface Props {
  coins: number
  reward: number
  resetCoins: () => void
}

const GameStatus = ({ coins, reward, resetCoins }: Props): React.ReactElement => {
  useEffect(() => {
    const divElement = document.getElementById('userMessage')
    if (divElement != null) {
      divElement.addEventListener(
        'animationend',
        () => {
          divElement.style.display = 'none'
        },
        { once: true }
      )
    }
  })
  if (coins <= 10) {
    return (
      <div className="statusElements">
        <div className="status">
          <h2>GAME OVER!</h2>
        </div>
        <SlotAppButton text="Restart Game" onClick={() => resetCoins()} />
      </div>
    )
  }
  return (
    <>
      {reward >= 20 && (
        <div id="userMessage" className="message">
          {reward >= 25 ? 'Excellent!!' : 'Nice!'}
        </div>
      )}
      <PointsCounter reward={reward} />
    </>
  )
}

export default GameStatus
