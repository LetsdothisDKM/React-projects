import CoinCounter from './components/CoinCounter'
import SlotReel from './components/SlotReel'
import SpinButton from './components/SpinButton'
import './assets/game.css'
import BetValue from './components/BetValue'
import { useEffect, useState } from 'react'
import GameStatus from './components/GameStatus'

export const DEFAULT_COIN_COUNTER = 100

interface Props {
  playerName: string
}

const Game = ({ playerName }: Props): React.ReactElement => {
  const [scroll, setScroll] = useState(false)
  const [coins, setCoins] = useState(DEFAULT_COIN_COUNTER)
  const [reward, setReward] = useState(0)
  const [gameID, setGameID] = useState(null)
  const [symbols, setSymbols] = useState('')
  const [autoSpinned, setAutoSpinned] = useState(false)

  useEffect(() => {
    if (gameID == null) {
      const getOrCreatePlayer = async (): Promise<void> => {
        try {
          const player = await window.api.getOrCreatePlayer(playerName)
          if (player) {
            const game = await window.api.startGame(player.player_id, DEFAULT_COIN_COUNTER)
            if (game) {
              setGameID(game.gameId)
            }
          }
        } catch (error) {
          console.error('Database error:', error)
        }
      }
      getOrCreatePlayer()
    }
  }, [playerName, gameID, autoSpinned, coins])

  const onClickingSpin = async (): Promise<void> => {
    setScroll(true)
    await recordSpin()
  }

  const updateCoins = (reward): void => {
    setReward(reward)
    setCoins(coins + reward - 10)
  }
  const recordSpin = async (): Promise<void> => {
    if (gameID != null) {
      try {
        await window.api.recordSpin(gameID, symbols, 10, reward)
      } catch (error) {
        console.log('Error while recording spin' + error.message)
      }
    }
  }

  return (
    <div className="container">
      <div className="header">
        <SpinButton
          className="headerItem"
          disabled={coins <= 10 || scroll || autoSpinned}
          onClickingSpin={() => {}}
          text="Auto Spin"
        />
        <h1 className="title">SLOT MACHINE</h1>
        <BetValue />
      </div>
      <SlotReel
        scroll={scroll}
        setScroll={setScroll}
        setReward={updateCoins}
        setSymbols={setSymbols}
      />
      <div className="footer">
        <CoinCounter coins={coins} />
        <GameStatus
          coins={coins}
          reward={reward}
          resetCoins={() => setCoins(DEFAULT_COIN_COUNTER)}
        />
        <SpinButton
          disabled={coins <= 10 || scroll || autoSpinned}
          onClickingSpin={onClickingSpin}
          text="Spin"
        />
      </div>
    </div>
  )
}
export default Game
