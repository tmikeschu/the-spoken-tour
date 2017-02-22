import React, { Component } from 'react';
import Map from './Map';

export default class Container extends Component {
  render() {
    const style = { width: '100vw', height: '100vh' };

    return (
      <div style={style}>
        <Map />
      </div>
    )
  }
}
