import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PageNavigation from "../../Components/PageNavigation/PageNavigation";
import {setSideBarOpen} from "../../Redux/Actions";

const mapStateToProps = (state) => {
    return {
        sideBarOpen: state.SideBarOpen,
        nominations: state.Nominations,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({setSideBarOpen}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(PageNavigation);