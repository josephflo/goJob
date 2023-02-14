import axios from 'axios';
export const  GET_NAME = 'GET_NAME';

export  function getName (name) {
    return async function (dispatch){
        try {
            let res = await axios.get(/* 'http://localhost:3001/' */ + name)
            return dispatch({
                type: GET_NAME,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}