import { useState, useEffect, useRef, createRef } from 'react'
import '../assets/slotReel.css'
import { RewardsMap, IconsMap, generateRows } from './SlotReelUtils'
import '../assets/cash-register-purchase.mp3'

interface Props {
  scroll: boolean
  setScroll: (boolean) => void
  setReward: (number) => void
  setSymbols: (string) => void
}

const SlotReel = ({ scroll, setScroll, setReward, setSymbols }: Props): React.ReactElement => {
  const [items, setItems] = useState<Array<Array<number>>>([])
  const [index, setIndex] = useState<number | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement>>([])
  //const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    const computeRewards = (): void => {
      let reward = 0
      if (index != null) {
        const row = items[index]
        if (row[0] == row[1] && row[1] == row[2]) {
          reward = row[0] == 2 ? 50 : row[0] == 1 ? 30 : 5
        } else if (row[0] != row[1] && row[1] != row[2] && row[0] != row[2]) {
          reward = 0
        }
        const key = items[index].sort().join('')
        if (RewardsMap.has(key)) {
          reward = RewardsMap.get(key) ?? 0
        }
      }
      setReward(reward)
    }

    const setIndexOnSpin = (): void => {
      const min = Math.ceil(0)
      const max = Math.floor(items.length - 1)
      let random = Math.floor(Math.random() * (max - min + 1)) + min
      random = random == 0 ? items.length - 1 : random - 1
      setIndex(random)
      setScroll(false)
    }

    if (scroll) {
      setIndexOnSpin()
    }
    if (items.length == 0) {
      setItems(generateRows())
      itemRefs.current = items.map((_, i) => itemRefs.current[i] ?? createRef())
    }
    if (index != null) {
      const activeRef = itemRefs.current[index]
      activeRef?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
      setSymbols(items[index].join(' ').toString())
      setTimeout(computeRewards, 500)
    }
  }, [index, scroll])

  return (
    <div className="scrollContainer">
      {/* <div className={scroll ? 'scrollAnimation' : ''}> */}
      {items.map((item, i) => (
        <div
          key={i}
          className={i == index ? 'rowHighlight' : 'rowContainer'}
          ref={(el) => {
            if (el != null) {
              itemRefs.current[i] = el
            }
          }}
        >
          <div key={0} className="row">
            <img className="gridIcon" src={IconsMap.get(item[0])} />
          </div>
          <div className="row" key={1}>
            <img className="gridIcon" src={IconsMap.get(item[1])} />
          </div>
          <div key={2} className="row">
            <img className="gridIcon" src={IconsMap.get(item[2])} />
          </div>
        </div>
      ))}
      {/* <audio ref={audioRef} src="../assets/cash-register-purchase.mp3" preload="auto" /> */}
      {/* </div> */}
    </div>
  )
}

export default SlotReel
