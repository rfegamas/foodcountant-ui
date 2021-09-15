import appconfig from "../appconfig"

const API_ADDRESS = appconfig.worshipUrl
const GET_FOODS_BY_NUTRIENTS = "/get-foods-by-nutrients"
const GET_LACKING_NUTRIENTS = "/get-lacking-nutrients"
const GENDER = "gender="
const AGE = "age="
const FOOD_DIARY = "food_diary="
const NUTRIENTS = "nutrients="

export const getLackingNutrients = async (gender, age, food_diary) => {
    let query = "?" + GENDER + gender + "&" + AGE + age
    food_diary.forEach(day => {
        let foods = "&" + FOOD_DIARY + day.join()
        query += foods
    })
    let url = new URL(API_ADDRESS + GET_LACKING_NUTRIENTS + query)
    
    let response = await fetch(url)
    if (response.ok) {
        let result = await response.json()

        let result_dict = {}
        result.forEach(nutrition => {
            result_dict[nutrition] = true
        })

        return result_dict
    }
}

export const getFoodsByNutrients = async (nutrients) => {
    let query = "?"
    nutrients.forEach(nutrition => {
        query += NUTRIENTS + nutrition + "&"
    })
    query = query.slice(0, -1)

    let url = new URL(API_ADDRESS + GET_FOODS_BY_NUTRIENTS + query)

    let response = await fetch(url)
    if (response.ok) {
        let result = await response.json()

        return result
    }
}
