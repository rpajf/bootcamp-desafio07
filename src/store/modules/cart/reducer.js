import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}

/*

  ao realizar um dispatch, todos os reducers são ativados
  parametros por padrão(state, action)
  switch -> decidir quando fazer ou nao a action, apenas
    a action relacionada ao reducer sera ouvida(ADD_TO_CART)


    Fluxo:
    1)COMP->action
    2)action -> avisa ao reducer(que recebe o caso especifico)
    3) alteraçoes sao feitas a partir da action
    4) todos os comps sao atualizados a partir do connect
    * O componente deve ser responsavel apenas por disparar a ação

    immer -> estado intermadiario(draft), possibilita manipular
    o array, ou objeto em questão


    bindActionCreators() -> a partir do mapDispatchToProps
    passa actions como props aos componentes



*/
