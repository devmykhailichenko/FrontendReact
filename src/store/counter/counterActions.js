import { INCREMENT, DECREMENT, RESET } from "./counterTypes.js";

export function increment(value) {
    return {
        type: INCREMENT,
        payload: value ? value : 1
    }
}

export function decrement(value) {
    return {
        type: DECREMENT,
        payload: value ? value : -1
    }
}

export function reset() {
    return {
        type: RESET,
    }
}