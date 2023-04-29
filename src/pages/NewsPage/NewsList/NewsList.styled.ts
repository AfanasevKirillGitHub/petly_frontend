import styled from 'styled-components';

export const NewsList = styled.ul`
  list-style: none;
  justify-content: center;
  @media screen and (min-width: 768px) {
  display: flex;
  flex-wrap: wrap;
  margin-right: -32px;
  }
`;

export const NewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  ::before {
    content: ' ';
    height: 6px;
    margin-bottom: 14px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: ${props => props.theme.radii.big};
    width: 100%;
  }
  @media screen and (min-width: 320px) {
    min-width: 280px;
    min-height: 502px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-height: 522px;
    flex-basis: calc(100% / 2 - 32px);
    margin-bottom: 60px;
    &:not(:last-child) {
    margin-right: ${props => props.theme.space[5]}px;
    }
    ::before {
    content: ' ';
    height: 8px;
    width: 100%;
  }
  }
  @media screen and (min-width: 1280px) {
    min-height: 544px;
    flex-basis: calc(100% / 3 - 32px);
    &:not(:last-child) {
    margin-bottom: 60px;
    margin-right: ${props => props.theme.space[5]}px;
    }
    ::before {
    content: ' ';
    height: 8px;
    width: 100%;
  }
}
`;

export const Img = styled.img`
  width: 100%;
  height: 252px;
  border-radius: ${props => props.theme.radii.normal};
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.mainText};
  line-height: ${props => props.theme.lineHeights.m};
  margin-top: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  height: 66px;
`;

export const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.newsText};
  line-height: ${props => props.theme.lineHeights.m};
  margin-bottom: 20px;
  height: 110px;
  @media screen and (min-width: 768px)  {
    margin-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.p`
  color: ${props => props.theme.colors.greyText};
  font-size: ${props => props.theme.space[4]}px;
  line-height: ${props => props.theme.lineHeights.m};
`;

export const Link = styled.a`
  color: ${p => p.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeights.medium};
`;
