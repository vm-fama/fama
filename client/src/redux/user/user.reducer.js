import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN:
      return {
        ...state,
        currentUser: 'Fama',
      };
    default:
      return state;
  }
};

export default userReducer;
