import React from "react"

import { FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core"


function RenderRecommendedNutritions(props) {
    const recommendedNutritions = props.recommendedNutritions
    const setRecommendedNutritions = props.setRecommendedNutritions

    const handleChange = (event) => {
        const copyRecommendedNutritions = {...recommendedNutritions}
        copyRecommendedNutritions[event.target.name] = event.target.checked

        setRecommendedNutritions(copyRecommendedNutritions)
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Select Nutritions to Show</FormLabel>
                <FormGroup>
                    {
                        Object.entries(recommendedNutritions)
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

function Recommended(props) {
    return (
        <div>
            <RenderRecommendedNutritions
              recommendedNutritions={props.recommendedNutritions}
              setRecommendedNutritions={props.setRecommendedNutritions}
            />
        </div>
    )
}

export default Recommended