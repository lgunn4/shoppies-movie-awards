import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setSideBarClosed} from "../../Redux/Actions";
import NominationSideBarContent from "../../Components/NominationSideBar/NominationSideBarContent";
import {deleteNomination} from "../../Redux/Actions/DeleteNominationAction";

const mapStateToProps = (state) => {
    return {
        nominations: state.Nominations.nominations,
        uiLoadingActions: state.uiReducer.loading,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({setSideBarClosed, deleteNomination}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(NominationSideBarContent);