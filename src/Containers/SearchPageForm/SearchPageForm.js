import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SearchForm from "../../Components/SearchPage/SearchForm";
import {fetchSearchResults} from "../../Redux/Actions/FetchSearchResultsAction";


const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchSearchResults}, dispatch)
};

export default connect(null, mapdispatchToProps)(SearchForm);