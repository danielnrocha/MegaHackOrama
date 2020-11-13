import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #ffff;
  border: 2px solid #000;
  width: 137px;
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 3px;
`;

export const ButtonTextLight = styled.Text`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto_900Black';
  color: #000;
`;
