export default function Button(props) {
  const { text } = props

  return (
    <button style={{backgroundColor: "white", color: "#001f97", fontSize: "2em"}}>{text}</button>
  )
}