import styled from 'styled-components/native'

export const StyledText = styled.Text`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
`
