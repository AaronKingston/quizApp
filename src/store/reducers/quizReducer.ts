import {ActionTypes} from 'store/types';

const initialState = {
  category: [],
  categoryLoading: false,
  categoryError: null,
  questions: [],
  questionsLoading: false,
  questionsError: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORY_REQUEST:
      return {
        ...state,
        category: [],
        categoryLoading: true,
        categoryError: null,
      };
    case ActionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.category,
        categoryLoading: false,
      };
    case ActionTypes.GET_CATEGORY_ERROR:
      return {
        ...state,
        categoryLoading: false,
        categoryError: action.error,
      };
    case ActionTypes.GET_QUESTION_REQUEST:
      return {
        ...state,
        questions: [],
        questionsLoading: true,
        questionsError: null,
      };
    case ActionTypes.GET_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        questionsLoading: false,
      };
    case ActionTypes.GET_QUESTION_ERROR:
      return {
        ...state,
        questionsLoading: false,
        questionsError: action.error,
      };
    default:
      return state;
  }
};

export default quizReducer;
