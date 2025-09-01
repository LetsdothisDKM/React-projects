interface Props {
  reward: number
}

const PointsCounter = ({ reward }: Props): React.ReactElement => {
  return (
    <div className="pointsContainer">
      <div>WIN</div>
      <div>{reward}</div>
    </div>
  )
}

export default PointsCounter
