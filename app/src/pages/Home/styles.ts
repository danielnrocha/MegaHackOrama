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

export const LogInButton = styled(RectButton)`
  background: #ffff;
  border: 2px solid #000;
  width: 137px;
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 3px;
`;

export const LogInButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto_900Black';
`;

export const SignupButton = styled(RectButton)`
  background: #000;
  width: 137px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const SignupButtonText = styled.Text`
  color: #ffff;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto_900Black';
`;
