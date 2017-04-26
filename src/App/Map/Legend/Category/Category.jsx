import React, { Component } from 'react';
import { categoryIcons, categoryLabels } from '../../category_data';

export default class Category extends Component {
  categoryIcons() {
    return categoryIcons;
  }

  categoryLabels() {
    return categoryLabels;
  }

  render() {
    const category = this.props.category;

    return(
      <li style={{display: this.props.tabIndex === 0 ? 'none' : 'block'}}>
        <span>
          <img 
            src={this.categoryIcons()[category]} 
            alt={category}
          />
        </span> 
        → { this.categoryLabels()[category] }
      </li>
    );
  }
}
