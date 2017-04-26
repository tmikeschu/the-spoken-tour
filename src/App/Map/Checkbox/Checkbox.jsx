import React, { Component } from 'react';
import { categoryLabels } from '../category_data';

export default class Checkbox extends Component {
  categoryLabels() {
    return categoryLabels;
  }

  render() {
    const category = this.props.category;

    return(
      <article className="checkbox">
        <input 
          type="checkbox"
          value={category}
          onChange={event => this.props.filterPins(event)}
        />
        <label>{ this.categoryLabels()[category] }</label>
      </article>
    );
  }
}

