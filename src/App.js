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
      <div className="container">
        
    {!showQueb && <InputForm
      name={name}
      setName={setName}
      setShowQueb={setShowQueb}
      className={InputForm}
      />}
    {showQueb && 
      <NameResult 
      name={name}
      setName={setName}
      setShowQueb={setShowQueb}
      />}
      </div>
      {/* <img 
          alt={"Drapeau du Québec"}
          src={logo}
          className="flag"
          /> */}
    </div>
    );
  }
  
export default App;
