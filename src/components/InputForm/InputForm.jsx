import { useState } from "react"
import Button from "../Button/Button"
import "./InputForm.css"
import { setQuebName } from "../../helpers/setQuebName" 
// import {handleChange, handleSubmit} from "../../helpers/formHelpers"


export default function InputForm({name, setName, setShowQueb}) {
 
  const handleChange = e => {
    setName({
      ...name,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    if (name.prenom.length > 0 && name.nomDeFamille.length > 0) {
      setName({
        ...name,
        quebName: setQuebName(name.prenom, name.nomDeFamille)
      })
      setShowQueb(true)
    }
  }
  

  return (
    <form className="InputForm" onSubmit={handleSubmit}>
      <h1>Trouvez votre nom Québecois</h1>
      <label>
        Prénom:
        <input
          type="text" 
          name="prenom"
          placeholder="Prénom"
          onChange={handleChange}
          oninvalid="this.setCustomValidity('Hé taouin, oublie pas de mettre ton prénom!')"
          oninput="setCustomValidity('')"
          required
        />
      </label>
      <label>
        Nom de famille:
        <input
          type="text"
          name="nomDeFamille"
          placeholder="Nom de famille"
          onChange={handleChange}
          oninvalid="this.setCustomValidity('Hé taouin, oublie pas de mettre ton nom de famille!')"
          oninput="setCustomValidity('')"
          required
        />
      </label>
      <Button
      type="submit"
      text={'Awaye donc!'}
      setShowQueb={setShowQueb()}
      />
    </form>
  )
}