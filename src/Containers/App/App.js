import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchNominations} from "../../Redux/Actions/FetchNominationsAction";
import App from "../../App";

const mapStateToProps = (state) => {
    return {
        isLoading: !state.Nominations.loaded,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchNominations}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(App);