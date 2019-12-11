import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #202020;
`;
export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductList = styled.FlatList``;
export const Product = styled.View`
  background: #fff;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  padding: 5px;

  align-items: center;
  margin: 0 20px 30px;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  background: #7159c1;

  border: 0;
  border-radius: 4px;

  overflow: hidden;
  margin-top: auto;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  width: 200px;
`;
export const StockAmount = styled.Text`
  background: rgba(0, 0, 0, 0.1);
  color: #eee;
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const AddButtonText = styled.Text`
  display: flex;
  align-content: center;
  margin-right: 40px;

  font-weight: bold;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;
