import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchbar.css';

class Searchbar extends Component {
  state = {
    searhQuery: '',
  };

  handleChange = event => {
    this.setState({ searhQuery: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searhQuery.trim()) {
      return;
    }
    this.props.onSubmit(this.state.searhQuery);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm_button">
            <span className="SearchForm_button_label">Search</span>
          </button>
          <input
            className="SearchForm_input"
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
