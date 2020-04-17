import React from 'react';

export default class List extends React.Component {
  
  render() {
    const matchingResults = this.props.state.results.map((resultName, index) => {
      if (resultName.includes(this.props.state.searchTerm)) {
        return <li key={index}>{resultName}</li>;
      }
      else {
        return null;
      }
    });

    return (
      <header>
        <h1 className="header">Results:</h1>
        <ul>
          {matchingResults}
        </ul>
      </header>
    )
  }
}