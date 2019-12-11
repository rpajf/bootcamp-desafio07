import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductCart,
  ProductImage,
  ProductName,
  ProductPrice,
  ProducDelete,
  Form,
  ProductQuantity,
  TableHead,
  Subtotal,
  Increment,
  TotalTitle,
  Total,
  TotalValue,
  Decrement,
} from './styles';

function Cart({
  navigation,
  cart,
  removeFromCart,
  updateAmountRequest,
  total,
}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.map(product => (
        <ProductCart key={product.id}>
          <ProductImage
            source={{
              uri: product.image,
            }}
          />

          <TableHead>
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{product.price.priceFormatted}</ProductPrice>
          </TableHead>
          <ProducDelete onPress={() => removeFromCart(product.id)}>
            <Icon name="trash" size={20} color="#7159c1" />
          </ProducDelete>
          <Form>
            <Increment onPress={() => increment(product)}>
              <Icon name="plus" size={20} color="#7159c1" />
            </Increment>
            <ProductQuantity
              editable={false}
              type="number"
              defaultValue={String(product.amount)}
            />
            <Decrement onPress={() => decrement(product)}>
              <Icon name="minus" size={20} color="#7159c1" />
            </Decrement>
            <Subtotal>{product.subtotal}</Subtotal>
          </Form>
        </ProductCart>
      ))}
      <Total>
        <TotalTitle>Total</TotalTitle>
        <TotalValue>{total}</TotalValue>
      </Total>
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    title: PropTypes.string,
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Cart.defaultProps = {
  title: 'Cart',
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, /* irá iniciar com 0 */ 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
