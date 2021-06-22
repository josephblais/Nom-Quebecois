import Button from "../Button/Button"
import { setQuebName } from "../../helpers/setQuebName"
import { useEffect } from "react"

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
    <>
    <h1>Tu t'appelles: {name.quebName}</h1>
    <div className="twoButtons">
      <Button 
      text={"Encore!"}
      click={refreshName}
      ></Button>
      <Button 
        text={"Recommencer"}
        click={clearName}
        ></Button>
    </div>
    </>
  )
}