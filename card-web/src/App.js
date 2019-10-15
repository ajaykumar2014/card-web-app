import React, { Component } from 'react';
import CardFormContainer from './containers/CardFormContainer'
import GridViewContainer from './containers/GridViewContainer'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <CardFormContainer />
        </div>
        <div className="row">
          <GridViewContainer></GridViewContainer>
        </div>

      </div>
    );
  }

}


export default App;
