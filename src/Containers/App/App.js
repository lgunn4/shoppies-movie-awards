import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchNominations} from "../../Redux/Actions/FetchNominationsAction";
import App from "../../App";

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchNominations}, dispatch)
};

export default connect(null, mapdispatchToProps)(App);