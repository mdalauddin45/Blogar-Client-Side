import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes"

export const getContent = (history) => {
    return {
        type: GET_CONTENT,
        payload: history
    }
}

export const addContent = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog
    }
}

export const deleteContent = (blog) => {
    return {
        type: DELETE_CONTENT,
        payload: blog
    }
}