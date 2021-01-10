import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addNomination from '../../Redux/Actions/AddNominationAction';
import SearchResult from '../../Components/SearchPage/SearchPageResults/SearchResult';
import deleteNomination from '../../Redux/Actions/DeleteNominationAction';

const mapStateToProps = (state) => ({
  nominations: state.Nominations.nominations,
});

const mapdispatchToProps = (dispatch) => bindActionCreators(
  { addNomination, deleteNomination },
  dispatch,
);
export default connect(mapStateToProps, mapdispatchToProps)(SearchResult);
