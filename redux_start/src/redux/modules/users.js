import axios from 'axios';

// 액션 타입 정의
const GET_USERS_START = 'redux_start/users/GET_USERS_START'; // 깃헙 API 호출 시작을 의미
const GET_USERS_SUCCESS = 'redux_start/users/GET_USERS_SUCCESS'; // 깃헙 API 호출 응답 성공
const GET_USERS_FAIL = 'redux_start/users/GET_USERS_FAIL'; // 깃헙 API 호출 응답 실패

// redux-promise-middleware
const GET_USERS = 'GET_USERS';

const GET_USERS_PENDING = 'redux_start/users/GET_USERS_PENDING';
const GET_USERS_FULFILLED = 'redux_start/users/GET_USERS_FULFILLED';
const GET_USERS_REJECTED = 'redux_start/users/GET_USERS_REJECTED';

// 액션 생성 함수
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
}

// redux-thunk
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
}
