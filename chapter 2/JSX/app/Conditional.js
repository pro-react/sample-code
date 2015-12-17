import React, { Component } from 'react';

// Parent Component
class Conditional extends Component {
  render() {
    let condition = true;
    return (
      <div>
        {condition ?
          <span>Hello JSX (The condition was true)</span>
        : null}
      </div>
    );
  }
}

export default Conditional
