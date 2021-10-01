import styled from 'styled-components/native'

export const StartupWrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.yellow};
`
export const HeroWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 200px;
  border-top-left-radius: ${({ theme }) => theme.spacing.xlarge * 3}px;
  padding-left: ${({ theme }) => theme.spacing.xlarge * 2}px;
  padding-top: ${({ theme }) => theme.spacing.xlarge}px;
  padding-right: ${({ theme }) => theme.spacing.large}px;
`
