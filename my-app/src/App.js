import React from "react"
import "./App.css"
import Input from "./Input"
import Submit from "./Submit"
import Recommended from "./Recommended"
import RecommendedNutrients from "./RecommendedNutrients"
import RecommendedFoods from "./RecommendedFoods"

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
  const [submitFinished, setSubmitFinished] = useState(false)
  const [callAPI, setCallAPI] = useState(false)
  const [callAPIFinished, setCallAPIFinished] = useState(false)
  const [recommendedNutrients, setRecommendedNutrients] = useState({})

  return (
    <div className="App">
      <RenderHeader />
      <div style={{ marginLeft: "100px", marginRight: "100px", marginTop: "100px" }}>
        <Input foodDiary={foodDiary} setFoodDiary={setFoodDiary} />
        <Submit
          setIsSubmitted={setIsSubmitted}
          setCallAPI={setCallAPI}
        />
        { isSubmitted
          ? <div>
              <Recommended
                callAPI={callAPI}
                setCallAPI={setCallAPI}
                foodDiary={foodDiary}
                recommendedNutrients={recommendedNutrients}
                setRecommendedNutrients={setRecommendedNutrients}
              />
            </div>
          : null
        }

        
        {/* {isSubmitted
          ? <div>
              <RecommendedNutrients
                foodDiary={foodDiary}
                fetchNutrientsAPI={fetchNutrientsAPI}
                setFetchNutrientsAPI={setFetchNutrientsAPI}
                setFetchFoodsAPI={setFetchFoodsAPI}
                recommendedNutrients={recommendedNutrients}
                setRecommendedNutrients={setRecommendedNutrients}
                />
              <RecommendedFoods
                fetchFoodsAPI={fetchFoodsAPI}
                setFetchFoodsAPI={setFetchFoodsAPI}
                recommendedNutrients={recommendedNutrients}
              />
            </div>
          : null
        } */}
      </div>
    </div>
  );
}

export default App;
