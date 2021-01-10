import { connect } from 'react-redux';
import SearchPageResults from '../../Components/SearchPage/SearchPageResults/SearchPageResults';

const mapStateToProps = (state) => ({
  searchResults: state.SearchResults,
});
export default connect(mapStateToProps)(SearchPageResults);
