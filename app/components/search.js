import React from 'react';
import { Link } from 'react-router';
import store from '../store';
import Index from '../components/index';

var Search = React.createClass({

  getInitialState() {
    return {
      restaurant: store.getRestaurantCollection()
    }
  },

  componentWillMount() {
      this.state.restaurant.on('change', this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount() {
      this.state.restaurant.off('change', null, this);
  },

  handleSubmit(e) {
    e.preventDefault();
    this.setState.restaurant = store.getRestaurantCollection([], this.refs.search.value);
      this.state.restaurant.fetch().then(
        ()=> {
          this.setState({
            restaurant: this.state.restaurant
          })
        }
      )
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

        <input type="search" />
        })}

        <ul>
          <li>
            {this.state.restaurant.toJSON().map((result) => <Index key={result.factual_id} {...result}/>)}

          </li>
            )
          })}
        </ul>
      </div>
    )
  }
})

export default Search;
