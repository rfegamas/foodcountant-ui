import React from "react"

import { Button, Grid, Card, TextField } from "@material-ui/core"

function RenderInputForm(props) {
    const foodDiary = props.foodDiary
    const setFoodDiary = props.setFoodDiary

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
            <Grid container spacing={10}>
                { foodDiary.map((day, foodDiaryIndex) =>
                    <div key={foodDiaryIndex} style={{ marginLeft: "25px", marginTop: "25px" }}>
                        <Card raised={true} style={{ "minHeight": "21rem" }}>
                            <Grid item>
                                <p> Day {foodDiaryIndex + 1} </p>
                                {day.map((food, foodIndex) =>
                                    <div key={foodIndex}>
                                        <Grid container style={{ marginLeft: "10px", marginRight: "10px"}}>
                                            <Grid item>
                                                <TextField
                                                    required
                                                    label="Consumable"
                                                    id="consumable"
                                                    name="consumable"
                                                    value={food}
                                                    placeholder={"Insert Food or Drink"}
                                                    onChange={ (event) => handleDiaryChange(event, foodDiaryIndex, foodIndex) }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button onClick={ (event) => handleRemoveConsumable(event, foodDiaryIndex, foodIndex)}>
                                                    {"Delete a Consumable!"}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )}
                                <Grid item>
                                    <Button onClick={ (event) => handleAddConsumable(event, foodDiaryIndex) }>
                                    {"Add a Consumable!"}
                                    </Button>
                                </Grid>
                                <Button onClick={ (event) => handleRemoveDay(event, foodDiaryIndex) }>
                                    {"Delete a Day!"}
                                </Button>
                            </Grid>
                        </Card>
                    </div>
                )}
                <Grid item>
                    <Button style={{ height: 300, width: 385 }} onClick={ (event) => handleAddDay(event) }>
                        {"Add a Day!"}
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
  }
  

function Input(props) {

    return (
        <div>
            <RenderInputForm foodDiary={props.foodDiary} setFoodDiary={props.setFoodDiary}/>
        </div>
    );
}

export default Input