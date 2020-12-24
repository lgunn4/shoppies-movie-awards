import {connect} from "react-redux";
import SearchPageResults from "../../Components/SearchPage/SearchPageResults/SearchPageResults";
import {bindActionCreators} from "redux";
import {addNomination} from "../../Redux/Actions/AddNominationAction";

const mapStateToProps = (state) => {
    return {
        searchResults: state.SearchResults,
        nominations: state.Nominations.nominations,
        searchCriteria: state.SearchCriteria
    };
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({addNomination}, dispatch)
};
export default connect(mapStateToProps, mapdispatchToProps)(SearchPageResults);