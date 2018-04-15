import React from 'react';

export default class InternalNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentsDidMount() {}

  render() {
    return (
      <div style={{ marginLeft: 15 }}>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#eaeaea' }}
          onClick={() => {
            location.href = '#basic-extract ';
          }}>
          Person basic info
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#f0e4e4' }}
          onClick={() => {
            location.href = '#condition-extract ';
          }}>
          Disease
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#d3e6f2' }}
          onClick={() => {
            location.href = '#drugs-extract-part1 ';
          }}>
          PPI Drugs
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#f8e3c4' }}
          onClick={() => {
            location.href = '#sides-extract-part1 ';
          }}>
          Side effects
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#fafafa' }}
          onClick={() => {
            location.href = '#other-nutrient-extract ';
          }}>
          Other drugs & Nutrient
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#b5e0b5' }}
          onClick={() => {
            location.href = '#natural-extract ';
          }}>
          Natural supplements
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#eaeaea' }}
          onClick={() => {
            location.href = '#extra-extract-part1 ';
          }}>
          Extra info
        </span>
      </div>
    );
  }
}
