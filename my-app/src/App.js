import logo from './logo.svg';
import React from "react";
import './App.css';

import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

// Renders the header for Foodcountant :)
// TODO: Logo, intro, calculator icon ?
function RenderHeader() {
  return (
    <div>
      <h1>
        Foodcountant :)
      </h1>
      <h2>
        An accountant, but for your food
      </h2>
    </div>
  )
}


function RenderInputForm() {
  const [foodDiary, setFoodDiary] = useState([[""]])

  const handleDiaryChange = (event, foodDiaryIndex, foodIndex) => {
    let copyFoodDiary = [...foodDiary]
    copyFoodDiary[foodDiaryIndex][foodIndex] = event.target.value

    setFoodDiary(copyFoodDiary)
  }

  const handleAddDay = (event) => {
    let copyFoodDiary = [...foodDiary, [""]]

    setFoodDiary(copyFoodDiary)
  }

  const handleRemoveDay = (event, foodDiaryIndex) => {
    const copyFoodDiary = foodDiary.filter((_, dayIndex) => dayIndex !== foodDiaryIndex)

    setFoodDiary(copyFoodDiary)
  }

  const handleAddConsumable = (event, foodDiaryIndex) => {
    let copyFoodDiary = [...foodDiary]
    copyFoodDiary[foodDiaryIndex] = [...copyFoodDiary[foodDiaryIndex], ""]

    setFoodDiary(copyFoodDiary)
  }

  const handleRemoveConsumable = (event, foodDiaryIndex, foodIndex) => {
    let copyDay = foodDiary[foodDiaryIndex]
    copyDay = copyDay.filter((_, index) => index !== foodIndex)

    let copyFoodDiary = [...foodDiary]
    copyFoodDiary[foodDiaryIndex] = copyDay

    setFoodDiary(copyFoodDiary)
  }

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item>
          { foodDiary.map((day, foodDiaryIndex) =>
            <div key={foodDiaryIndex}>
              <p> Day {foodDiaryIndex + 1} </p>
              {day.map((food, foodIndex) =>
                <div key={foodIndex}>
                  <Grid container>
                    <Grid item>
                      <TextField
                        required
                        label="Food or Drink"
                        id="consumable"
                        name="consumable"
                        value={food}
                        placeholder={"Insert Food or Drink"}
                        onChange={ (event) => handleDiaryChange(event, foodDiaryIndex, foodIndex) }
                      />
                      <Button onClick={ (event) => handleAddConsumable(event, foodDiaryIndex) }>
                        {"Add a Consumable!"}
                      </Button>
                      <Button onClick={ (event) => handleRemoveConsumable(event, foodDiaryIndex, foodIndex)}>
                        {"Delete a Consumable!"}
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )}
              <Button onClick={ (event) => handleRemoveDay(event, foodDiaryIndex) }>
                {"Delete a Day!"}
              </Button>
              </div>
          )}
          <Button onClick={ (event) => handleAddDay(event) }>
            {"Add a Day!"}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <RenderHeader/>
      <div style={{ marginLeft: "100px" }}>  
        <RenderInputForm/>
      </div>
      {/*<header className="App-header">
        <p>
          Foodcountant :)
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
