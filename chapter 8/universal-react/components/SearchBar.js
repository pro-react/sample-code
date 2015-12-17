import React, {Component} from 'react';

class SearchBar extends React.Component {
  handleChange(event){
    this.props.onUserInput(event.target.value)
  }

  render(){
    return <input type="search"
                  placeholder="search"
                  value={this.props.filterText}
                  onChange={this.handleChange.bind(this)} />
  }
}
SearchBar.propTypes = {
  onUserInput: React.PropTypes.func.isRequired,
  filterText: React.PropTypes.string.isRequired
}

export default SearchBar;
