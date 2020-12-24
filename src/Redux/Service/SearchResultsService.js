import {OMDB_API_URL} from "../../Constants/Constants";

export const getOMDBResults = (searchText, pageNumber) => {
    return fetch(
        encodeURI(`${OMDB_API_URL}&type=movie&s=${searchText}&page=${pageNumber}`),
        {
            method:      'GET',
        },
    ).then(response => response.json()
    ).then(data => {
        if (data.Response === "False") {
            throw Error(data.Error);
        } else {
            return data;
        }
    });
};