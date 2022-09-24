import { DECREMENT, INCREMENT } from "./actionType"

export const makeIncrement = (payload) => {
    return {
        type : INCREMENT
    }
};

export const makeDecrement = (payload) => {
    return {
        type : DECREMENT
    }
}