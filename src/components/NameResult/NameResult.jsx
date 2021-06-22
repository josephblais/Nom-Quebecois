import Button from "../Button/Button"

export default function NameResult({name}) {
  return (
    <>
    <h1>Tu t'appelles: {name}</h1>
    <div className="twoButtons">
      <Button text={"Encore!"}></Button>
      <Button text={"Recommencer"}></Button>
    </div>
    </>
  )
}