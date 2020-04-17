import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: '',
    };
  }

  fetchSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    const category = event.target.category.value;
    const newState = this.state;
    newState.results = [];
    fetch(`https://swapi-thinkful.herokuapp.com/api/${category}/`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw Error();
        }
      })
      .then(response => {
        response.results.map(result => newState.results.push(result.name));
      });
   
    newState.searchTerm = searchTerm;
    this.setState(newState)
  };

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Header />
          <main>
            <Search fetchSearch={this.fetchSearch} />
            <List state={this.state} />
          </main>
        </ErrorBoundary>
      </Fragment >
    );
  }
}