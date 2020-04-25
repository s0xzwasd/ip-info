import { combineReducers } from 'redux';
import app from './app';
import data from './data';

const main = combineReducers({
  app,
  data,
});

export default main;
