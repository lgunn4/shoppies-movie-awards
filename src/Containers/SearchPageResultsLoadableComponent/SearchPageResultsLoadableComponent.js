import {connect} from "react-redux";
import SearchPageResults from "../../Components/SearchPage/SearchPageResults/SearchPageResults";
import LoadableComponent from "../../Components/LoadableComponent/LoadableComponent";


const mapStateToProps = (state) => {
    return {
        isLoading: state.SearchResults.isLoading,
    };
};

export default connect(mapStateToProps)(LoadableComponent);