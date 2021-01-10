import { connect } from 'react-redux';
import LoadableComponent from '../../Components/LoadableComponent/LoadableComponent';

const mapStateToProps = (state) => ({
  isLoading: state.SearchResults.isLoading,
});

export default connect(mapStateToProps)(LoadableComponent);
