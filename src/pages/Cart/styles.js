import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex: 1;
  padding: 30px;
`;
export const ProductCart = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  align-items: center;
  justify-content: space-between;

  width: 330px;
  height: 130px;
`;

export const ProductTable = styled.View``;
export const TableHead = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 163px;
  height: 59px;
`;
export const ProductName = styled.Text`
  color: #707070;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  display: flex;
`;

export const Increment = styled(RectButton)`
  padding: 4px;
`;
export const Decrement = styled(RectButton)`
  padding: 4px;
`;

export const Form = styled.View`
  display: flex;
  background: #eeee;
  flex-direction: row;
  padding: 5px;
  align-items: center;
`;
export const ProductQuantity = styled.TextInput`
  background: #fff;
  width: 51px;
  height: 26px;
  display: flex;
  margin: 0 5px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #9b9090;
`;
export const Subtotal = styled.Text`
  padding-left: 130px;
  font-weight: bold;
`;
export const Total = styled.View`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 100px;
`;

export const ProducDelete = styled(RectButton)`
  margin-right: 10px;
`;
export const TotalValue = styled.Text``;
export const TotalTitle = styled.Text`
  color: #9b9090;
  font-weight: bold;
  text-transform: uppercase;
`;
