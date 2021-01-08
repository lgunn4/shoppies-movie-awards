import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HomePage from "../../Pages/HomePage/HomePage";
import {clearSearchResults} from "../../Redux/Actions/ClearSearchResultsAction";


const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({clearSearchResults}, dispatch)
};

export default connect(null, mapdispatchToProps)(HomePage);