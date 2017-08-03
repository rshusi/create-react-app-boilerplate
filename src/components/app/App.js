import './styles.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { appLoad } from '../../actions/AppActions';

const reactAppLink = 'https://github.com/facebookincubator/create-react-app';

class App extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return(
      <Row>
        <Col className="home" xs={12}>
          <h1 className="title">Hello world!</h1>
          <p className="message">
            Welcome to a pre-confingured react boilerplate built on top
            of <a href={reactAppLink} target="blank">create-react-app</a> that contains:
          </p>
          <ul className="list">
            <li><a href="https://github.com/ReactTraining/react-router">React Router</a></li>
            <li><a href="http://redux.js.org/">Redux</a></li>
            <li><a href="https://github.com/react-bootstrap/react-bootstrap">React Bootstrap</a></li>
            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
            <li><a href="http://sass-lang.com/">SASS</a> Loader</li>
          </ul>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    load: state.App,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadApp: () => {
      dispatch(appLoad());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
