import { useEffect } from "react"
import Button from "../Button/Button"
import "./InputForm.css"
import { setQuebName } from "../../helpers/setQuebName" 
// import {handleChange, handleSubmit} from "../../helpers/formHelpers"


export default function InputForm({name, setName, setShowQueb}) {

  useEffect(()=>{
    // access the first input element and set the error message
    document.getElementsByTagName("input")[0].setCustomValidity("Hé taouin, oublie pas ton prénom!")
    // access the second input element and set the error message
    document.getElementsByTagName("input")[1].setCustomValidity("Hé taouin, oublie pas ton nom de famille!")
  },[])

  const handleChange = e => {
    if (e.target.value.length > 0) {
      setName({
        ...name,
        [e.target.name]: e.target.value
      })
      e.target.setCustomValidity('')
    }
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
        <span className="labelText">Prénom</span>
        <input
          type="text" 
          name="prenom"
          placeholder="Prénom"
          onChange={handleChange}  
          required
        />
      </label>
      <label>
      <span className="labelText">Nom de famille</span>
        <input
          type="text"
          name="nomDeFamille"
          placeholder="Nom de famille"
          onChange={handleChange}
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