import { combineReducers } from 'redux';
import alert from './alert';
import tableData from './tableData';

export default combineReducers({
  alert,
  tableData
});