import Immutable from 'immutable';
import { createReducer } from 'redux-act';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});

export default createReducer({
  [LOCATION_CHANGE]: (state, payload) => state.merge({
    locationBeforeTransitions: payload
  })
}, initialState);
