import React, { Component } from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import UserCCardFormContainer from './containers/UserCCardFormContainer'
import GridViewContainer from './containers/GridViewContainer'
import {saveUserCardDetailsReducer} from './reducers/saveUserCardDetailsReducer'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const reducer = combineReducers({
  cardDetailsReducer:saveUserCardDetailsReducer
});


const store = createStore(reducer, composeWithDevTools());
function App() {
  return (
    <div className="App-box">
      <Provider store={store}>
        <div className="row">
          <UserCCardFormContainer />
        </div>
        <div className="row">
          <GridViewContainer></GridViewContainer>
        </div>
      </Provider>
    </div>
  )
}

export default App;
