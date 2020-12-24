import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import NominationSideBar from "../../Components/NominationSideBar/NominationSideBar";
import {setSideBarClosed} from "../../Redux/Actions";
import {fetchNominations} from "../../Redux/Actions/FetchNominationsAction";

const mapStateToProps = (state) => {
    return {
        sideBarOpen: state.SideBarOpen,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({setSideBarClosed, fetchNominations}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(NominationSideBar);