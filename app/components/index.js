import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import $ from 'jquery';


var Index = React.createClass({

  getInitialState (){
    return {
      isSearching: false
    };
  },

  handleSearch () {
    this.setState ({
      isSearching: this.State.isSearching
    });
  },

  toggleSearch() {
    $(".fa-search").toggle();
    $(".fa-times").toggle();
    this.setState({
      isSearching: !this.state.isSearching

    })
  },


  render() {
    return (
      <div>
        {this.state.isSearching && <input type="search" className="search-box" placeholder="Find Food and Friends..." onSubmit={this.handleSearch} />}
        <div className="top-nav">
          <img src="" alt="" />
            <button className="search-button" onClick={this.toggleSearch}><i className="fa fa-search"></i><i className="fa fa-times"></i></button>
          </div>
      <div>
        <h1>Home</h1>
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

export default Index;
