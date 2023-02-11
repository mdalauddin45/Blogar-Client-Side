import { ADD_HISTORY, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes"

export const getContent = (history) => {
    return {
        type: GET_CONTENT,
        payload: history
    }
}

export const addHistory = (blog) => {
    return {
        type: ADD_HISTORY,
        payload: blog
    }
}

export const deleteContent = (blog) => {
    return {
        type: DELETE_CONTENT,
        payload: blog
    }
}