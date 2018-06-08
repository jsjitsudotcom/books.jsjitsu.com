import { connect } from "react-redux";
import actions from "./../../../actions";

const mapState = state => ({
  books: state.books.books,
  loading: state.books.fetching
});

const mapDispatch = dispatch => ({
  onMore: () => dispatch(actions.books.fetchMore())
});

export default connect(mapState, mapDispatch);
