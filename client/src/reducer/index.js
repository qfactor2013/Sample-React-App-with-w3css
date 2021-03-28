import { combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import contact from './contactReducer';

const rootReducer = combineReducers({
  contact,
  // form: reduxFormReducer,
});
export default rootReducer;
