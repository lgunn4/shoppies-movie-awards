import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNomination} from "../../Redux/Actions/AddNominationAction";
import SearchResult from "../../Components/SearchPage/SearchPageResults/SearchResult";

const mapStateToProps = (state) => {
    return {
        nominations: state.Nominations.nominations,
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({addNomination}, dispatch)
};
export default connect(mapStateToProps, mapdispatchToProps)(SearchResult);