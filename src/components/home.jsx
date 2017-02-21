import React, { Component } from 'react';
import { Link } from 'react-router';

// Styles
import '../stylesheets/App.css';

class Home extends Component {
  render() {
    return (
      <div className="spacer">
        <article className="home">
          <div className="content">
            <Link to="/main">Hello</Link>
          </div>
        </article>
      </div>
    );
  }
}

export default Home;
