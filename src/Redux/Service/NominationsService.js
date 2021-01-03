import {LOCAL_STORAGE_KEY_NOMINATIONS} from "../../Assets/Constants";

export const getNominationResults = () => {
    const nominations = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOMINATIONS));
    if (nominations === null) {
        return [];
    } else {
        return nominations;
    }
};

export const deleteAPINomination = (imdbID) => {
    const nominations = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOMINATIONS))
        .filter(nomination => nomination.imdbID !== imdbID);

    localStorage.setItem(LOCAL_STORAGE_KEY_NOMINATIONS, JSON.stringify(nominations));
};

export const postNomination = (nomination) => {
    let nominations = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOMINATIONS));
    if (nominations === null) {
        nominations = [nomination];
    } else {
        nominations.push(nomination);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY_NOMINATIONS, JSON.stringify(nominations));
};