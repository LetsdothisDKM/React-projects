import '../assets/welcome.css'

interface Props {
  text: string
  onClick: () => void
  className?: string
}

const SlotAppButton = ({ text, onClick, className }: Props): React.ReactElement => {
  return (
    <button className={className ? `button ${className}` : 'button'} onClick={() => onClick()}>
      {text}
    </button>
  )
}

export default SlotAppButton
