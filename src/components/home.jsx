import React, { Component } from 'react';
import { Link } from 'react-router';

// Styles
import '../stylesheets/App.css';

class Home extends Component {
  render() {
    return (
      <article className="home">
        <div className="content">
          <Link to="/main">Find out more...</Link>
        </div>
      </article>
    );
  }
}

export default Home;
