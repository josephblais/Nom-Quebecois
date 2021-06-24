import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import NameResult from './components/NameResult/NameResult';
import logo from "./drapeau-quebec.gif"

function App() {
  const [name, setName] = useState({
    prenom: "",
    nomDeFamille: "",
    quebName: "",
  })
  const [showQueb, setShowQueb] = useState(false)

  return (
    <div className="App">
        <img 
          alt={"Drapeau du Québec"}
          src={logo}
          className="flag"
          />
    {!showQueb && <InputForm
      name={name}
      setName={setName}
      setShowQueb={setShowQueb}
    ></InputForm>}
    {showQueb && 
      <NameResult 
        name={name}
        setName={setName}
        setShowQueb={setShowQueb}
        />}
        <div class="powr-hit-counter" id="a133b226_1624554965"></div>
    </div>
    );
  }
  
export default App;
