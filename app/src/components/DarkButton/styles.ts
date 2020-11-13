import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #000;
  width: 137px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  color: #ffff;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto_900Black';
`;
