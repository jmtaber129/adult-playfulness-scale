const answers = (state = {}, action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return Object.assign({}, state, {
        [action.key]: action.score,
      });
    default:
      return state
  }
}

export default answers;
