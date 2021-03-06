import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffff;
`;

export const ArrowReturn = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 25px;
  height: 25px;
`;

export const MoneyIcon = styled.Image`
  margin-top: 0px;
  height: 41px;
  width: 41.5px;
  position: relative;
  top: 8px;
  left: 10px;
`;

export const TitleText = styled.Text`
  textAlign: center
  font-size: 36px;
  font-family: 'Comfortaa_400Regular';
  font-weight: 400;
  margin-bottom: 20px;
  margin: auto;
  padding-horizontal: 20px;
  color: black;
  position: absolute;
  top: 1px;
`;

export const BodyText = styled.Text`
  font-size: 13px;
  font-family: 'Comfortaa_400Regular';
  font-weight: 400;
  margin-bottom: 20px;
  padding-horizontal: 20px;
  color: black;
  position: absolute;
  top: 120px;
  margin: auto;
  text-align: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333',
  padding: 15,
})`
  width: 343px;
  height: 52px;

  background: #ffff;
  border: 2px solid #000;
  margin: 10px;
`;

export const ProfileButton = styled(RectButton)`
  width: 80%
  height: 52px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background-color:#5ce06e
  border-radius: 10px;
`;

export const ProfileButtonText = styled.Text`
  color: black;
  font-size: 13px;
  font-family: 'Roboto_900Black';
  text-transform: uppercase;
  position: relative;
  top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
