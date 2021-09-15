import React, { useEffect } from "react"

import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox
} from "@material-ui/core"

import { getLackingNutrients } from "./api/foodcountant"


function RenderRecommendedNutrients(props) {
    // const foodDiary = props.foodDiary
    // const fetchNutrientsAPI = props.fetchNutrientsAPI
    // const setFetchNutrientsAPI = props.setFetchNutrientsAPI
    // const setFetchFoodsAPI = props.setFetchFoodsAPI
    // const recommendedNutrients = props.recommendedNutrients
    // const setRecommendedNutrients = props.setRecommendedNutrients

    // useEffect(() => {
    //     async function getNutrients(gender, age, foodDiary) {
    //         let nutrients = await getLackingNutrients(gender, age, foodDiary)
            
    //         setRecommendedNutrients(nutrients)
    //     }

    //     if (fetchNutrientsAPI) {
    //         getNutrients("male", "17", foodDiary)
            
    //         setFetchNutrientsAPI(false)
    //     }

    //     if (!fetchNutrientsAPI) {
    //         setFetchFoodsAPI(true)
    //     }
    // })

    const recommendedNutrients = props.recommendedNutrients
    const setRecommendedNutrients = props.setRecommendedNutrients


    const handleChange = (event) => {
        const copyRecommendedNutrients = {...recommendedNutrients}
        copyRecommendedNutrients[event.target.name] = event.target.checked

        setRecommendedNutrients(copyRecommendedNutrients)
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Select Nutrients to Show</FormLabel>
                <FormGroup>
                    {
                        Object.entries(recommendedNutrients)
                        .map( ([nutrition, isChecked], index) =>
                            <FormControlLabel
                              control={<Checkbox checked={isChecked} onChange={handleChange} name={nutrition}/>}
                              label={nutrition}
                              key={index}
                            />
                        )
                    }
                </FormGroup>
            </FormControl>
        </div>
    )
}

function RecommendedNutrients(props) {
    return (
        <div>
            <RenderRecommendedNutrients
              recommendedNutrients={props.recommendedNutrients}
              setRecommendedNutrients={props.setRecommendedNutrients}
            />
        </div>
    )
}

export default RecommendedNutrients