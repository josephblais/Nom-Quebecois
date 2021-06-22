export default function Button(props) {
  const { text, click } = props

  return (
    <button 
      style={{backgroundColor: "white", color: "#001f97", fontSize: "2em"}}
      onClick={click}
    >{text}</button>
  )
}