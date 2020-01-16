import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Questionnaire from './Questionnaire';
import Results from './results';
import { SurveyQuestion } from './surveyQuestion';
import rootReducer from './reducers';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header" style={{paddingBottom: '200px'}}>
          <Questionnaire style={{margin: 'auto'}}/>
          <Results />
        </header>
      </div>
    </Provider>
  );
}

export default App;
