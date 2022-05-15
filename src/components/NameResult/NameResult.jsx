import Button from "../Button/Button"
import { setQuebName } from "../../helpers/setQuebName"
import "./NameResult.css"

export default function NameResult({name, setName, setShowQueb}) {

  const refreshName = () => {
    setName({
      ...name,
      quebName: setQuebName(name.prenom, name.nomDeFamille)
    })
  }

  const clearName = () => {
    setShowQueb(false)
  }

  return (
    <div className="container">
    <h1>Tu t'appelles: <br/><span id="queb-name">{name.quebName}</span></h1>
    <div className="twoButtons">
      <Button 
      text={"Encore!"}
      click={refreshName}
      className="button"
      ></Button>
      <Button 
        text={"Recommencer"}
        click={clearName}
        className="button"
      ></Button>
    </div>
    </div>
  )
}