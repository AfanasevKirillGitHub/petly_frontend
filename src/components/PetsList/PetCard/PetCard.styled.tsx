import styled from 'styled-components';

export const PetCard = styled.article`
  border: solid 1px;

  display: flex;
  gap: 20px;
  flex-direction: column;

  width: 280px;
  padding: 20px;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.m};

  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    width: 704px;

    flex-direction: row;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  height: 100%;

  flex: 0 0 auto;

  overflow: hidden;

  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
  }
`;

export const CardData = styled.div`
  border: 1px solid;
  width: 100%;

  @media screen and (min-width: 768px) {
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border: 1px solid red;

  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
  }
`;

export const CardComments = styled.div`
  border: 1px solid green;

  @media screen and (min-width: 768px) {
  }
`;
