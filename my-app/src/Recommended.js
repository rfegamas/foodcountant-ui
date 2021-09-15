import React, { useEffect, useState } from "react"

import RecommendedNutrients from "./RecommendedNutrients"
import RecommendedFoods from "./RecommendedFoods"
import { getFoodsByNutrients, getLackingNutrients } from "./api/foodcountant"

function RenderRecommended(props) {
    const [checkedNutrients, setCheckedNutrients] = useState([""])
    const [foods, setFoods] = useState([""])

    const callAPI = props.callAPI
    const setCallAPI = props.setCallAPI
    const foodDiary = props.foodDiary
    const gender = "male"
    const age = "17"
    const recommendedNutrients = props.recommendedNutrients
    const setRecommendedNutrients = props.setRecommendedNutrients

    useEffect(() => {
        async function getCheckedNutrients() {
            var copyCheckedNutrients = []
            for (let nutrition in recommendedNutrients) {
                if (recommendedNutrients[nutrition]) {
                    copyCheckedNutrients = [...copyCheckedNutrients, nutrition]
                }
            }

            setCheckedNutrients(copyCheckedNutrients)
        }

        async function getNutrients() {
            let nutrients = await getLackingNutrients(gender, age, foodDiary)
            console.log(nutrients)
            setRecommendedNutrients(nutrients)
        }

        async function getFoods() {
            if (checkedNutrients.length > 0) {
                const fetchedFoods = await getFoodsByNutrients(checkedNutrients)

                setFoods(fetchedFoods)
            }
        }

        function sleep(miliseconds) {
            return new Promise(resolve => setTimeout(resolve, miliseconds))
        }

        async function getNutrientsAndFoods() {
            getNutrients().then(getCheckedNutrients().then(getFoods()))
            console.log(checkedNutrients)
            console.log(foods)
            // getNutrients().then(() => {
            //     sleep(5000).then(() => {
            //         getCheckedNutrients()
            //     })
            //     // getCheckedNutrients().then(() => {
            //     //     // getFoods()
            //     //     console.log(checkedNutrients)
            //     // })
            // })
        }

        if (callAPI) {
            getNutrientsAndFoods()

            setCallAPI(false)
        }
    })

    return (
        <div>
            <RecommendedNutrients
              foodDiary={foodDiary}
              recommendedNutrients={recommendedNutrients}
              setRecommendedNutrients={setRecommendedNutrients}
            />
            <RecommendedFoods
              foods={foods}
              checkedNutrients={checkedNutrients}
            />
        </div>
    )
}

function Recommended(props) {
    return (
        <div>
            <RenderRecommended
              callAPI={props.callAPI}
              setCallAPI={props.setCallAPI}
              foodDiary={props.foodDiary}
              recommendedNutrients={props.recommendedNutrients}
              setRecommendedNutrients={props.setRecommendedNutrients}
            />
        </div>
    )
}

export default Recommended