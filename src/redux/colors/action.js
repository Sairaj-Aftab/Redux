import { DANGER, DARK, INFO, LIGHT, SUCCESS, WARNING } from "./actionType"


export const colorDark = (payload) => {
    return {
        type : DARK
    }
};

export const colorDanger = (payload) => {
    return {
        type : DANGER
    }
}

export const colorSuccess = (payload) => {
    return {
        type : SUCCESS
    }
}

export const colorInfo = (payload) => {
    return {
        type : INFO
    }
}

export const colorWarning = (payload) => {
    return {
        type : WARNING
    }
}

export const colorLight = (payload) => {
    return {
        type : LIGHT
    }
}