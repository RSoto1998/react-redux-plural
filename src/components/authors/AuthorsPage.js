import React, { useEffect, useState } from "react";
import * as authorActions from "../../redux/actions/authorActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const AuthorsPage = ({ actions }) => {
  const [authors, setAuthors] = useState([]);
  const [count, setCount] = useState(0);

  // I tried calling the API the same we did it in CoursesPages.js, but got an error too :(
  // Also, I tried doing it as a Class Component and that did work, so maybe it has something to do with the way I'm calling the API
  useEffect(() => {
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
    return () => {
      console.log("cleanup");
    };
  }, [authors.length, actions]);

  console.log(authors);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

// class AuthorsPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   // componentDidMount goes fourth
//   componentDidMount() {
//     const { authors, actions } = this.props;

//     if (authors.length === 0) {
//       actions.loadAuthors().catch((error) => {
//         alert("Loading authors failed" + error);
//       });
//     }
//     console.log(authors);
//   }

//   // render() goes third
//   render() {
//     return <div>AuthorsPage class component works!</div>;
//   }
// }

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

// mapStateToProps() goes first
function mapStateToProps(state) {
  return {
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

// mapDispatchToProps goes second
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);

//export default AuthorsPage;
