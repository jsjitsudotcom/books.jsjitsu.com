import { connect } from "react-redux";
import actions from "./../../../actions";

const mapState = (state, props) => ({
  value: state.books.search
});

const mapDispatch = (dispatch, props) => ({
  onChange: value => dispatch(actions.books.changeSearchAndFetch(value))
});

export default connect(mapState, mapDispatch);
