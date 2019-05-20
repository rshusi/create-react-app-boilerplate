import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { appLoad } from "../../actions/app-actions";
import "./styles.scss";

class App extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <Row>
        <Col className="home" xs={12}>
          <h1 className="title">Hello world!</h1>
          <p className="message">
            Welcome to a pre-confingured react boilerplate built on top of{" "}
            <a
              href="https://github.com/facebookincubator/create-react-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              create-react-app
            </a>{" "}
            that contains:
          </p>
          <ul className="list">
            <li>
              <a
                href="https://github.com/ReactTraining/react-router"
                rel="noopener noreferrer"
                target="_blank"
              >
                React Router
              </a>
            </li>
            <li>
              <a
                href="http://redux.js.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Redux
              </a>
            </li>
            <li>
              <a
                href="https://github.com/react-bootstrap/react-bootstrap"
                rel="noopener noreferrer"
                target="_blank"
              >
                React Bootstrap
              </a>
            </li>
            <li>
              <a
                href="http://getbootstrap.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Bootstrap
              </a>
            </li>
            <li>
              <a
                href="http://sass-lang.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                SASS
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    load: state.App
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadApp: () => {
      dispatch(appLoad());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
