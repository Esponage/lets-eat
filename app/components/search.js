import React from 'react';
import { Link } from 'react-router';

var Search = React.createClass({

  getInitialState() {
    return {
      search: "",
      results: []
    };
  },

  handleChange(event) {
    this.setState({search: event.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();

  },

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input
              type="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
        </form>

        {this.props.children && React.cloneElement(this.props.children, {
          SOMETHINGHERE: this.state.results
        })}

        <ul>
          {this.state.results.map((result) => {
            return (
              <li key={result.id}>
                <Link
                    to={SOMETHING}>
                    {result.SOMETHING}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})
