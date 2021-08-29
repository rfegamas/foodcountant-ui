import React from "react"
import "./App.css"
import Input from "./Input"
import Submit from "./Submit"
import Recommended from "./Recommended"

import { useState } from "react"

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
  const [recommendedNutritions, setRecommendedNutritions] = useState({
    "Protein": false,
    "Fat": false,
  })

  return (
    <div className="App">
      <RenderHeader />
      <div style={{ marginLeft: "100px", marginRight: "100px", marginTop: "100px" }}>
        <Input foodDiary={foodDiary} setFoodDiary={setFoodDiary} />
        <Submit setIsSubmitted={setIsSubmitted}/>
        {isSubmitted
          ? <Recommended recommendedNutritions={recommendedNutritions} setRecommendedNutritions={setRecommendedNutritions}/>
          : null
        }
      </div>
    </div>
  );
}

export default App;
