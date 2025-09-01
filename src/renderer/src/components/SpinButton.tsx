interface Props {
  onClickingSpin: () => void
  disabled: boolean
  text: string
  className?: string
}
const SpinButton = ({ onClickingSpin, disabled, text, className }: Props): React.ReactElement => {
  return (
    <button
      className={disabled ? `circle ${className}` : `circleAnimation ${className}`}
      onClick={() => onClickingSpin()}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default SpinButton
