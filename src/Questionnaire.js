import React from 'react';

import SurveyQuestion from './surveyQuestion.js';

const wordPairs = require('./wordPairs.json');

const Questionnaire = (props) => {
  return (
    <div>
    {
      wordPairs.wordPairs.map(pair => {
        return (
          <SurveyQuestion left={pair.left} right={pair.right} reversed={pair.reversed} />
        );
      })
    }
    </div>
  )
}

export default Questionnaire;
