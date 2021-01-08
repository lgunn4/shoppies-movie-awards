import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PageNavigation from "../../Components/PageNavigation/PageNavigation";
import {setSideBarOpen} from "../../Redux/Actions/UIActions";

const mapStateToProps = (state) => {
    return {
        nominations: state.Nominations.nominations,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({setSideBarOpen}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(PageNavigation);