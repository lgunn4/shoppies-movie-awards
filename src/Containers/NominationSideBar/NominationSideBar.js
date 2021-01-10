import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NominationSideBar from '../../Components/NominationSideBar/NominationSideBar';
import { setSideBarClosed } from '../../Redux/Actions/UIActions';

const mapStateToProps = (state) => ({
  sideBarOpen: state.uiReducer.sideBarOpen,
});

const mapdispatchToProps = (dispatch) => bindActionCreators({ setSideBarClosed }, dispatch);

export default connect(mapStateToProps, mapdispatchToProps)(NominationSideBar);
