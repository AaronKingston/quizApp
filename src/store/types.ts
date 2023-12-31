export const enum ActionTypes {
  // Game Constants
  DATA_RESET = 'DATA_RESET',
  DATA_ERROR = 'DATA_ERROR',
  DATA_SUCCESS = 'DATA_SUCCESS',
  DATA_SAVE = 'DATA_SAVE',
  DATA_LOADING = 'DATA_LOAD',
  DATA_LOADING_SUCCESS = 'DATA_LOAD_SUCCESS',
  ANSWER_LOADING = 'ANSWER_LOADING',
  ANSWER_CORRECT = 'ANSWER_CORRECT',
  ANSWER_WRONG = 'ANSWER_WRONG',
  ANSWER_LOADING_FINISHED = 'ANSWER_LOADING_FINISHED',
  NEXT_QUESTION = 'NEXT_QUESTION',
  GAME_OVER = 'GAME_OVER',

  GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST',
  GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS',
  GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR',

  GET_QUESTION_REQUEST = 'GET_QUESTION_REQUEST',
  GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS',
  GET_QUESTION_ERROR = 'GET_QUESTION_ERROR',
}
