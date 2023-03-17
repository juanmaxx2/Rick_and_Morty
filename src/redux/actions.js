export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character }
}

export const deleteFavorite = (id) => {
    return { type: DELETE_FAVORITE, payload: id }
}

export const getFavorite = () => {
    return function (dispatch){
        fetch ("")
        .then ((response) => response.json())
        .then ((data) => dispatch ({type: GET_FAVORITE, payload: data}))
    }
}