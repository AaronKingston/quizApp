import {ActionTypes} from '../types';
import axios from 'axios';

const BASE_URL = 'https://opentdb.com/';

export const getCategory = () => {
  return async dispatch => {
    try {
      dispatch(getCategoryLoading());
      const response = await axios.get(`${BASE_URL}api_category.php`);
      dispatch(getCategorySuccess(response.data.trivia_categories));
    } catch (error) {
      dispatch(getCategoryError(error));
    }
  };
};

const getCategoryLoading = () => {
  return {
    type: ActionTypes.GET_CATEGORY_REQUEST,
  };
};

const getCategorySuccess = value => {
  return {
    type: ActionTypes.GET_CATEGORY_SUCCESS,
    category: value,
  };
};

const getCategoryError = error => {
  return {
    type: ActionTypes.GET_CATEGORY_ERROR,
    error,
  };
};

export const getQuestions = ({difficulty = '', category = ''}) => {
  return async dispatch => {
    try {
      let custom_url = '';
      custom_url = difficulty.id && `&difficulty=${difficulty?.id}`;
      custom_url += category.id && `&category=${category?.id}`;
      dispatch(getQuestionsRequest());
      const response = await axios.get(
        `${BASE_URL}api.php?amount=10${custom_url}`,
      );
      dispatch(getQuestionsSuccess(response.data.results));
    } catch (error) {
      getQuestionsError(error);
    }
  };
};

const getQuestionsRequest = () => {
  return {
    type: ActionTypes.GET_QUESTION_REQUEST,
  };
};

const getQuestionsSuccess = value => {
  return {
    type: ActionTypes.GET_QUESTION_SUCCESS,
    questions: value,
  };
};

const getQuestionsError = error => {
  return {
    type: ActionTypes.GET_QUESTION_ERROR,
    error,
  };
};
