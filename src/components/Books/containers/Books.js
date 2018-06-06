import { connect } from "react-redux";

const mapState = (state, props) => ({
  books: state.books.books,
  loading: state.books.fetching
});


export default connect(mapState);
