import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Image,
  Product,
  Name,
  Price,
  ProductList,
  StockAmount,
  AddButton,
  AddButtonText,
} from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    /* depois de conectar com redux(connect),
       Main tem acesso a prop dispatch.
    */
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ProductList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product>
              <Image source={{ uri: item.image }} />
              <Name>{item.title}</Name>
              <Price>{item.priceFormatted}</Price>
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
                <AddButtonText>Adicionar</AddButtonText>
                <StockAmount>
                  <Icon name="add-shopping-cart" size={20} />
                  {String(amount[item.id] || 0)}
                </StockAmount>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});
/*
  cada product vai ter uma quantidade que é
  acessada pelo reduce, incializando com um obj vazio,
  o amount de cada [product.id]
*/

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
