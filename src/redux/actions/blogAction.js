import {
    ADD_TO_HISTORY,
    REMOVE_FROM_HISTORY,
    GET_CONTENT,
    DELETE_CONTENT,
    ADD_CONTENT,
    UPDATE_CONTENT
} from "../actionTypes/actionTypes"

export const getContent = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    }
}

export const deleteContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}

export const addContent = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    }
}

export const updateContent = (data) => {
    return {
        type: UPDATE_CONTENT,
        payload: data
    }
}

export const addHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog
    }
}

export const removeFromHistory = (blog) => {
    return {
        type: REMOVE_FROM_HISTORY,
        payload: blog
    }
}