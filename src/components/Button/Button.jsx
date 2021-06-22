import "./Button.css"

export default function Button(props) {
  const { text, click } = props

  return (
    <button 
      onClick={click}
    >{text}</button>
  )
}