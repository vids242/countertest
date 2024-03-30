import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType"

export const increse = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNTER})
}

export const decrese = () => (dispatch) => {
    dispatch({type: DECREMENT_COUNTER})
}