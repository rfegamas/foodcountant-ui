import React, { useEffect, useState } from "react"

function RenderRecommendedFoods(props) {
    // const [checkedNutrients, setCheckedNutrients] = useState([""])
    // const [foods, setFoods] = useState([""])
    // const recommendedNutrients = props.recommendedNutrients
    // const fetchFoodsAPI = props.fetchFoodsAPI
    // const setFetchFoodsAPI = props.setFetchFoodsAPI

    // useEffect(() => {
    //     function getCheckedNutrients(recommendedNutrients) {
    //         var copyCheckedNutrients = [...checkedNutrients]
    //         for (let nutrition in recommendedNutrients){
    //             if (recommendedNutrients[nutrition]) {
    //                 copyCheckedNutrients = [...copyCheckedNutrients, nutrition]
    //             }
    //         }
            
    //         setCheckedNutrients(copyCheckedNutrients)
    //     }
    
    //     async function getFoods(checkedNutrients) {
    //         const fetchedFoods = await getFoodsByNutrients(checkedNutrients)
            
    //         setFoods(fetchedFoods)
    //     }

    //     if (fetchFoodsAPI) {
    //         getCheckedNutrients(recommendedNutrients)
    //         getFoods(checkedNutrients)

    //         setFetchFoodsAPI(false)
    //     }
    // })

    const foods = props.foods
    const checkedNutrients = props.checkedNutrients

    return (
        <div>
            <h2>Recommended Foods:</h2>
            { foods.map((food, index) =>
                <div key={index}>
                    <h3>
                        {food}
                    </h3>
                </div>
            )}
        </div>
    )
}

function RecommendedFoods(props) {
    return (
        <div>
            <RenderRecommendedFoods
              foods={props.foods}
              checkedNutrients={props.checkedNutrients}
            />
        </div>
    )
}

export default RecommendedFoods