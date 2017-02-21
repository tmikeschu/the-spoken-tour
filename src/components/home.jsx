import React, { Component } from 'react';
import '../stylesheets/App.css';

class Home extends Component {
  render() {
    return (
      <div className="spacer">
        <article className="home">
          <div className="content">
            {this.props.children}
          </div>
        </article>
      </div>
    );
  }
}

export default Home;
