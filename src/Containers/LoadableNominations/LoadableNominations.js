import {connect} from "react-redux";
import LoadableComponent from "../../Components/LoadableComponent/LoadableComponent";


const mapStateToProps = (state) => {
    return {
        isLoading: state.Nominations.isLoading,
    };
};

export default connect(mapStateToProps)(LoadableComponent);