import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineImageSearch } from 'react-icons/md';
import './searchbar.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searchQuery.trim()) {
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm_button">
            <MdOutlineImageSearch className="SearchForm_icon" size={24} />
            <span className="SearchForm_button_label">Search</span>
          </button>
          <input
            className="SearchForm_input"
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
