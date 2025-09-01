interface Props {
  coins: number
}

const CoinCounter = ({ coins }: Props): React.ReactElement => {
  return (
    <div className="footerItem">
      <div>COINS</div>
      <div>{coins}</div>
    </div>
  )
}

export default CoinCounter
