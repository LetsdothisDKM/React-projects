import lemonIcon from '../assets/icons/lemonIcon.svg'
import cherryIcon from '../assets/icons/cherryIcon.svg'
import melonIcon from '../assets/icons/melonIcon.svg'

export const IconsMap: Map<number, string> = new Map()

const createMap = (): void => {
  IconsMap.set(1, lemonIcon)
  IconsMap.set(2, cherryIcon)
  IconsMap.set(3, melonIcon)
}

createMap()

export const RewardsMap: Map<string, number> = new Map()

const createRewardsMap = (): void => {
  RewardsMap.set('112', 0)
  RewardsMap.set('113', 0)
  RewardsMap.set('122', 5)
  RewardsMap.set('223', 20)
  RewardsMap.set('133', 0)
  RewardsMap.set('233', 10)
}
createRewardsMap()

const getCombinations = (arr, len): Array<Array<number>> => {
  if (len == 1) {
    return arr.map((item) => [item])
  }

  const res: Array<Array<number>> = []
  arr.forEach((item) => {
    const smallerCombos = getCombinations(arr, length - 1)
    smallerCombos.forEach((combo) => {
      res.push([item, ...combo])
    })
  })
  return res
}
export const generateRows = (): Array<Array<number>> => {
  return getCombinations([1, 2, 3], 3)
}
