import React from 'react';
import { connect } from 'react-redux';

import { answerQuestion } from './actions';

export class SurveyQuestion extends React.Component {
  updateSelected(num) {
    this.props.answerQuestion(this.getKey(), num);
  }

  getKey() {
    return `${this.props.left}_${this.props.right}`;
  }

  getOrderedScores() {
    const nums = Array.from(Array(7).keys()).map(el => el);
    if (this.props.reversed) {
      return nums;
    }
    return nums.reverse();
  }

  _renderRadioButtons() {
    return (
      <span>
      {
        this.getOrderedScores().map((num) => {
          return (<input type="radio" name={this.getKey()} style={{margin: '20px'}} onChange={() => this.updateSelected(num)}/>)
        })
      }
      </span>
    );
  }

  render() {
    return (
      <tr>
        <td style={{textAlign: 'right'}}>{this.props.left}</td>
        {this._renderRadioButtons()}
        <td style={{textAlign: 'left'}}>{this.props.right}</td>
      </tr>
    );
  }
}

const mapDispatchToProps = { answerQuestion };

export default connect(null, mapDispatchToProps)(SurveyQuestion);
