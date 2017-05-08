import React, { Component } from 'react';
import Category from './Category/Category';
import { categoryIcons } from '../category_data'
import '../../App.css'

export default class Legend extends Component {
  categoryIcons() {
    return categoryIcons
  }
  
  render() {
    const legendCategories = this.props.categories.map((category, i) => {
      return(
        <Category key={i} category={category} />
      );
    });

    return (
      <article className="legend">
        <h4>Legend</h4>
        <ul>
          <li><span style={{fontWeight: "bold"}}>―― </span> → Planned Route</li>
          <li><span style={{fontWeight: "bold", color: "#f00"}}>―― </span> → Actual Route</li>
          <li>
            <span>
              <img src={this.categoryIcons()["cycling"]} alt="cyclist"/>
            </span> → That's Us! ( as of {this.props.date} )
          </li>
          <li>
            <span>
              <img src={this.categoryIcons()["endOfDay"]} alt="flag"/>
            </span> → Day-to-Day
          </li>
          { legendCategories }
        </ul>
      </article>
    );
  }
}
