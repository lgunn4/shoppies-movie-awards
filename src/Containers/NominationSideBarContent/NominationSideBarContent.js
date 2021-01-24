import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSideBarClosed } from '../../Redux/Actions/UIActions';
import NominationSideBarContent from '../../Components/NominationSideBar/NominationSideBarContent/NominationSideBarContent';
import deleteNomination from '../../Redux/Actions/DeleteNominationAction';

const mapStateToProps = (state) => ({
  nominations: state.Nominations.nominations,
});

const mapdispatchToProps = (dispatch) => bindActionCreators(
  { setSideBarClosed, deleteNomination },
  dispatch,
);

export default connect(mapStateToProps, mapdispatchToProps)(NominationSideBarContent);
