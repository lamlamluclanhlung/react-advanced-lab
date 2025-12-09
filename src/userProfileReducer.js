// Exercise 1.1 – Fetch Machine with useReducer

export const initialState = {
  status: 'idle',   // 'idle' | 'loading' | 'resolved' | 'rejected'
  data: null,
  error: null,
};

export function userProfileReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT': {
      // chỉ cho phép từ idle hoặc rejected
      if (state.status !== 'idle' && state.status !== 'rejected') return state;
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    }
    case 'FETCH_SUCCESS': {
      if (state.status !== 'loading') return state;
      return {
        ...state,
        status: 'resolved',
        data: action.payload,
        error: null,
      };
    }
    case 'FETCH_FAILURE': {
      if (state.status !== 'loading') return state;
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
