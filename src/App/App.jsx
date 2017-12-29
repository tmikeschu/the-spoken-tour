import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Nav from './Nav/Nav.jsx'
import './App.css'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      x: false,
    }
  }

  handleClick = (evt) => {
    this.setState(({ x }) => ({ x: !x }))
  }

  render() {
    const { x } = this.state;
    const display = x ? 'x' : '';

    return (
      <div className="App">
        <section className={`HeaderNav HeaderNav--${display}` }>
          <Header />
          <Nav onClick={this.handleClick} display={display} />
        </section>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default withRouter(App)
