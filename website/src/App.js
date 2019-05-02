import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import * as firebaseHandler from './firebaseHandler';
import * as orderReader from './orderReader';

class App extends React.Component {
  componentWillMount() {
    firebaseHandler.initializeApp();
  }
  render() {
    return (
      <Table />
    );
  }
}

export default App;
