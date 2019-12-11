import React from 'react';
import {
  Container,
  Image,
  Wrapper,
  HeaderButton,
  Cart,
  CartText,
} from './styles';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

function Header({ navigation, cartSize }) {


  return (

    <Wrapper>
      <Container>
        <HeaderButton onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../assets/Logo.png')} />
        </HeaderButton>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <CartText>{cartSize}</CartText>
          <Icon name="shopping-basket" size={29} color="#fff" />
        </Cart>
      </Container>
    </Wrapper>
  );
}
Header.propTypes = {
  navigation: PropTypes.shape({
    /* navigation(obj) com methodo navigate*/

    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
console.tron.log(this.props)


export default connect(state => ({
  cartSize: state.cart.length /* nome do reducer(cart) */,
  /* CartSize uma prop que é passada no comp */
}))(Header);
