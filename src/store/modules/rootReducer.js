import { combineReducers } from 'redux';
import cart from './cart/reducer';
/* todos os reducers
   podem ser importados no combine
*/

export default combineReducers({
  cart,
});
