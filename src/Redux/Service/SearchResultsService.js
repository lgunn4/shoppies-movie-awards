import { OMDB_API_URL } from '../../Assets/Constants';

const getOMDBResults = (searchText, pageNumber) => fetch(
  encodeURI(`${OMDB_API_URL}&type=movie&s=${searchText}&page=${pageNumber}`),
  {
    method: 'GET',
  },
).then((response) => response.json()).then((data) => {
  if (data.Response === 'False') {
    throw Error(data.Error);
  } else {
    return data;
  }
});

export default getOMDBResults;
