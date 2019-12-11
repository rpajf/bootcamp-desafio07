import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../../services/service';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state => state.cart.find(p => p.id == id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.warn('ERRO');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addToCartSuccess(data));
    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    console.tron.warn('Quantidade fora de estoque');
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

/*

  * -> built in function of JS, generator
  works like async, more powerful thou

  its a step between the reducer and the action

  yield -> await


  takeLatest -> manage user actions, listen only
  to the last action, helps avoiding unwanted events
*/
