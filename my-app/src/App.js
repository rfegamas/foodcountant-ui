import React from "react"
import "./App.css"
import Input from "./Input"
import Submit from "./Submit"

import { useState } from "react"
import { Button, Grid, TextField } from "@material-ui/core"

// Renders the header for Foodcountant :)
// TODO: Logo, intro, calculator icon ?
function RenderHeader() {
  return (
    <div>
      <h1> Foodcountant :) </h1>
      <h2> An accountant, but for your food </h2>
    </div>
  )
}



function App() {
  const [foodDiary, setFoodDiary] = useState([[""]])
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="App">
      <RenderHeader />
      <div style={{ marginLeft: "100px", marginRight: "100px", marginTop: "100px" }}>
        <Input foodDiary={foodDiary} setFoodDiary={setFoodDiary} />
        <Submit setIsSubmitted={setIsSubmitted}/>
      </div>
    </div>
  );
}

export default App;
