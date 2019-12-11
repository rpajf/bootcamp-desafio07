import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  background-color: ${colors.dark};
`;
export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  height: 84px;
`;
export const Image = styled.Image`
  width: 183px;
  height: 24px;
`;
export const HeaderButton = styled(RectButton)`
  padding: 5px;
  margin-left: 10px;
`;
export const CartText = styled.Text`
  color: #fff;
`;

export const Cart = styled(RectButton)`
  text-decoration: none;
  margin-right: 50px;
  margin-bottom: 5px

`;
