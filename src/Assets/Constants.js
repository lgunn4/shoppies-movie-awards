import { PropTypes } from 'prop-types';

export const OMDB_API_URL = 'https://www.omdbapi.com/?apikey=f1f38a60';
export const LOCAL_STORAGE_KEY_NOMINATIONS = 'LOCAL_STORAGE_KEY_NOMINATIONS';

export const HOME_PAGE_CARD_ROW_SIZE = 3;
export const NOMINATION_TEXT_LENGTH = 40;

export const HEADER_BACKGROUND_IMAGE_URL = 'https://res.cloudinary.com/ddtorekqd/image/upload/v1610212677/movie-background_i0rb2d.jpg';

export const NOMINATIONS_PROP_TYPES = PropTypes.arrayOf(
  PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  }),
);

export const SEARCH_RESULTS_PROP_TYPES = PropTypes.shape({
  error: PropTypes.shape({}),
  isLoading: PropTypes.bool.isRequired,
  pageNumber: PropTypes.number.isRequired,
  results: NOMINATIONS_PROP_TYPES.isRequired,
  searchCriteria: PropTypes.string,
  totalResults: PropTypes.string.isRequired,
});
