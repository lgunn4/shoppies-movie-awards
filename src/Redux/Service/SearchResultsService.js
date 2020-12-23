import {API_URL} from "../../Constants/Constants";

export const getOMDBResults = (searchText) => {
    return fetch(
        encodeURI(`${API_URL}&s=${searchText}`),
        {
            method:      'GET',
        },
    ).then(response => response.json()
    ).then(data => data);

};