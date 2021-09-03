import React from "react"

function RenderRecommendedFoods(props) {
    function getCheckedNutritions(recommendedNutritions) {
        var checkedNutritions = []
        for (let nutrition in recommendedNutritions){
            if (recommendedNutritions[nutrition]) {
                checkedNutritions = [...checkedNutritions, nutrition]
            }
        }

        return checkedNutritions
    }

    function getFoods(chekedNutritions) {
        const foods = ["Milk", "Butter", "Diabetes"]

        return foods
    }

    const recommendedNutritions = props.recommendedNutritions
    const checkedNutritions = getCheckedNutritions(recommendedNutritions)
    const foods = getFoods(checkedNutritions)

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
            <RenderRecommendedFoods recommendedNutritions={props.recommendedNutritions}/>
        </div>
    )
}

export default RecommendedFoods