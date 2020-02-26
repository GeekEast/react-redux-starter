import { API } from "services/api";
import { normalizeComments } from "utils";
import _ from 'lodash';

const GET_COMMENTS_STATE = 'GET_COMMENTS_STATE'
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const SET_COMMENT = 'SET_COMMENT';
const COMMENTS_ERROR = 'COMMENTS_ERROR'
const REFRESH = 'REFRESH';

export const updateComment = (comment) => (dispatch) => {
  dispatch({ type: SET_COMMENT, payload: comment });
}

export const getComments = () => (dispatch, getState) => {
  if (_.isEmpty(getState().comments.entities)) {
    dispatch({ type: GET_COMMENTS_STATE })
    API.get('/comments')
      .then(({ data }) => dispatch({ type: GET_COMMENTS_SUCCESS, payload: normalizeComments(data) }))
      .catch(({ response }) => dispatch({ type: COMMENTS_ERROR, payload: response }));
  }
}

export const refreshComments = () => (dispatch) => dispatch({ type: REFRESH });

const initialComments = {
  entities: {},
  errors: [],
  isLoading: true
}

export default (state = initialComments, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS_STATE: return { ...state, isLoading: true }
    case GET_COMMENTS_SUCCESS: return { ...state, entities: { ...state.entities, ...payload }, isLoading: false }
    case COMMENTS_ERROR: return { ...initialComments, errors: [...state.errors, payload], isLoading: false }
    case SET_COMMENT: return { ...state, entities: { ...state.entities, [payload.id]: { ...state.entities[payload.id], ...payload } }, isLoading: false }
    case REFRESH: return { ...state };
  }
  return state;
}