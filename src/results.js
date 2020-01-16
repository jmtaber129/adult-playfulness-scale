import React from 'react';
import * as _ from 'lodash';

import { connect } from 'react-redux';

const wordPairs = require('./wordPairs.json');

const OVERALL_DIVISOR = 224;

const resultsFromAnswers = (answers) => {
  console.log(Object.values(answers));
  const overall = Object.values(answers).reduce((total, answer) => total + answer, 0);
  const subscales = _.mapValues(wordPairs.subscales, (div, key) => {
    const wordPairKeysForSubscale = wordPairs.wordPairs
      .filter(pair => pair.subscale === key)
      .map(pair => `${pair.left}_${pair.right}`);
    const score = _(answers).pick(wordPairKeysForSubscale).reduce((total, score) => total + score, 0);
    return score / div;
    // get all wordpairs for the key, look them up in answers, and add them together
  })
  return {
    overall: overall / OVERALL_DIVISOR,
    ...subscales,
  };
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingResults: false };
  }
  onShowResults() {
    this.setState((state) => {
      return { isShowingResults: !state.isShowingResults }
    });
  }

  _renderShowButton() {
    return (
      <button onClick={() => this.onShowResults()}>Show results</button>
    )
  }

  _renderResults() {
    return (
      <div style={{textAlign: 'left'}}>
        {
          _.map(resultsFromAnswers(this.props.questionState), (result, key) => {
            return (
              <tr>
                <td style={{paddingRight: '10px'}}>{key}</td>
                <td>{result.toFixed(2)}</td>
              </tr>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div style={{ paddingTop: '30px' }}>
        {this._renderShowButton()}
        {this.state.isShowingResults && this._renderResults()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { questionState: state };
};

export default connect(mapStateToProps)(Results);
