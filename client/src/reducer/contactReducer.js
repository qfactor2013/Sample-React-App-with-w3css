import A from '../action/actionTypes';

const initialState = {
  loading: false,
  message: '',
  errMessage: '',
};
export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case A.SEND_MAIL_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
        errMessage: '',
      };
    case A.SEND_MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        errMessage: '',
      };
    case A.SEND_MAIL_FAILED:
      return {
        ...state,
        loading: false,
        message: '',
        errMessage: action.payload,
      };
    default:
      return state;
  }
}
