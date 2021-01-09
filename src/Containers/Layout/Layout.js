import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchNominations} from "../../Redux/Actions/FetchNominationsAction";
import Layout from "../../Components/Layout/Layout";

const mapStateToProps = (state) => {
    return {
        isLoading: !state.Nominations.loaded,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchNominations}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(Layout);