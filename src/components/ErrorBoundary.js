import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Ops! Something went wrong!</h2>
          <h3>Error: {this.state.error}</h3>
          <p>{this.state.errorInfo}</p>
        </div>
      );
    }
    else {
      return this.props.children;
    }
  }
}