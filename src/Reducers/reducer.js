import { combineReducers } from 'redux'

import cardReducer from '../Components/Cards/CardList/CardListSlice.js';

const rootReducer = combineReducers({
    cards: cardReducer
  })
  
export default rootReducer