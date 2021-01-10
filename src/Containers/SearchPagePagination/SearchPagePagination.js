import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchSearchResults from '../../Redux/Actions/FetchSearchResultsAction';
import SearchPagePagination from '../../Components/SearchPage/SearchPagePagination/SearchPagePagination';

const mapStateToProps = (state) => ({
  searchResults: state.SearchResults,
});

const mapdispatchToProps = (dispatch) => bindActionCreators({ fetchSearchResults }, dispatch);
export default connect(mapStateToProps, mapdispatchToProps)(SearchPagePagination);
