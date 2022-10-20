import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./Address";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import "./App.css";

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return { ...prev, ...fields}
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultistepForm([
    <UserForm { ...data } updateFields={ updateFields } />,
    <AddressForm { ...data } updateFields={ updateFields } />,
    <AccountForm { ...data } updateFields={ updateFields } />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation!")
  }

  return <div style = {{
      position: "relative",
      background: "white",
      border: "1px solid black",
      boxShadow: "10px 10px 15px #333",
      padding: "2rem",
      margin: "10vh 35%",
      borderRadius: ".5rem",
      fontFamily: "Arial",
      maxWidth: "max-content"
    }}
  >
    <form onSubmit={ onSubmit }>
      <div style={{ position: "absolute", 
        top: ".5rem", 
        right: ".5rem" 
        }}
        >
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && <button type="button" onClick={ back } style={{ 
                border: "none", 
                borderRadius: "5px", 
                backgroundColor: "rgb(153, 0, 17)", 
                color: "#000", 
                padding: ".5rem"
              }}
              >
                Back
              </button>}
            <button type="submit" style={{ 
              border: "none", 
              borderRadius: "5px", 
              backgroundColor: "rgb(18, 105, 15)", 
              color: "#000", 
              padding: ".5rem"
              }}
            >
                { isLastStep ? "Finish" : "Next" }
              </button>
          </div>
    </form>
  </div>
}

export default App;
