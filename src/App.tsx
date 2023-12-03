import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert===true&&<Alert onClose={()=>setShowAlert(false)}>Hello Alert</Alert>}
      <ButtonComponent handleClick={() => setShowAlert(true)}>
        Primary
      </ButtonComponent>
    </>
  );
}

export default App;
