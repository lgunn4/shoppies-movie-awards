import {connect} from "react-redux";
import NominationCards from "../../Components/NominationCards/NominationCards";


const mapStateToProps = (state) => {
    return {
        nominations: state.Nominations.nominations,
    };
};

export default connect(mapStateToProps)(NominationCards);