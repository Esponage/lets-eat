import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';


var Location = React.createClass ({

  getInitialState (){
    return {
      isSearching: false
    };
  },

  handleSearch () {
    this.setState ({
      isSearching: this.State.isEditing
    });
  },

  initiateSearch() {
    this.setState({
      isSearching: true
    })
  },

  render() {
    return (
      <div>

        {this.state.isSearching && <input type="search" className="search-box" placeholder="Find Food and Friends..." onSubmit={this.handleSearch} />}

        <div className="top-nav">
          <img src="" alt="" />
            <button className="search-button" onClick={this.initiateSearch}><i className="fa fa-search"></i></button>
          </div>
      <div>
        <h1>Local</h1>
      </div>
        <div className="row">
          <footer>
            <nav className="dashboard-nav">
              <Link to="/deals"><button className="dashboard-nav-buttons1"><i className="fa fa-tag"></i></button></Link>
              <Link to="/location"><button className="dashboard-nav-buttons2"><i className="fa fa-map-marker"></i></button></Link>
              <Link to="/index"><button className="dashboard-nav-buttons3"><i className="fa fa-home"></i></button></Link>
              <Link to="/favorites"><button className="dashboard-nav-buttons4"><i className="fa fa-thumbs-o-up"></i></button></Link>
              <Link to="/profile"><button className="dashboard-nav-buttons5"><i className="fa fa-user"></i></button></Link>
            </nav>
          </footer>
        </div>
      </div>
    );
  }
});

export default Location;
