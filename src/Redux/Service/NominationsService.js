import {STRAPI_API_URL} from "../../Constants/Constants";

export const getNominationResults = () => {
    return fetch(
        encodeURI(`${STRAPI_API_URL}/nominations`),
        {
            method:      'GET',
        },
    ).then(response => response.json()
    ).then(data => data);
};

export const deleteAPINomination = (strapiID) => {
    return fetch(
        encodeURI(`${STRAPI_API_URL}/nominations/${strapiID}`),
        {
            method: 'DELETE',
        }
    ).then(response => response.json()
    ).then(data => data);
};

export const postNomination = (nomination) => {
    return fetch(
        encodeURI(`${STRAPI_API_URL}/nominations`),
        {
            method: 'POST',
            body: JSON.stringify(nomination)
        }
    ).then(response => response.json()
    ).then(data => data);
};