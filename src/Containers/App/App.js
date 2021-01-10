import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchNominations from '../../Redux/Actions/FetchNominationsAction';
import App from '../../App';

const mapStateToProps = (state) => ({
  isLoading: !state.Nominations.loaded,
});

const mapdispatchToProps = (dispatch) => bindActionCreators({ fetchNominations }, dispatch);

export default connect(mapStateToProps, mapdispatchToProps)(App);
