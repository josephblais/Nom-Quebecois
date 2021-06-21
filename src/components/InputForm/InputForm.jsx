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
    console.log(name)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    setName({
      ...name,
      quebName: setQuebName(name.prenom, name.nomDeFamille)
    })
    setShowQueb(true)
    console.log(name)
  }
  

  return (
    <form className="InputForm" onSubmit={handleSubmit}>
      <h1>Trouvez votre nom Québecois</h1>
      <label>
        Prénom:
        <textarea 
          name="prenom"
          onChange={handleChange}
        />
      </label>
      <label>
        Nom de famille:
        <textarea
          name="nomDeFamille"
          onChange={handleChange}
        />
      </label>
      <Button
      type="submit"
      text={'Awaye donc!'}
      />
    </form>
  )
}