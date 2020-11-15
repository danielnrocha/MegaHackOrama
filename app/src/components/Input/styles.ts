import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View``;

export const InputContent = styled.TextInput.attrs<ContainerProps>({
  placeholderTextColor: '#333',
  padding: 15,
})`
  width: 343px;
  height: 52px;

  background: #ffff;
  border: 2px solid #000;
  margin: 10px;

  ${props =>
    props.isFocused &&
    css`
      border-color: #369e1e;
    `}
`;
