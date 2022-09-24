import { FOOD_CHANGE } from "./actionType"


export const foodChange = (payload) => {
    return {
        type : FOOD_CHANGE,
        payload : payload
    }
}