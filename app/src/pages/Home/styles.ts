import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #369e1e;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const ButtonsContainer = styled.View`
  margin: 30px;
  padding-horizontal: 15px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
