import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { reducer} from './reducers';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
  );

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
   
  );
}

export default App;
