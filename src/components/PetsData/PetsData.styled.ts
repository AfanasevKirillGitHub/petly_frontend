import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 57px;
  font-family: ${props => props.theme.fontFamily.body};
`;

export const TitleInfo = styled.p`
  margin-bottom: 24px;
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: 1.36;
`;
