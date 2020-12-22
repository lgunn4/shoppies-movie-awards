import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {removeNomination, setSideBarClosed} from "../../Redux/Actions";
import NominationSideBarContent from "../../Components/NominationSideBar/NominationSideBarContent";

const mapStateToProps = (state) => {
    return {
        nominations: state.Nominations,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({setSideBarClosed, removeNomination}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(NominationSideBarContent);