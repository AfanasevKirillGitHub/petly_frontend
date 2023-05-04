import styled from 'styled-components';

export const PetCard = styled.article`
  display: flex;
  gap: 20px;
  flex-direction: column;

  width: 280px;
  height: 541px;

  padding: 20px;

  font-family: ${p => p.theme.fontFamily.body};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.xl};
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.medium};

  box-shadow: ${p => p.theme.shadows.main};

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 230px;

    flex-direction: row;
    gap: 32px;

    line-height: ${p => p.theme.lineHeights.m};
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    height: auto;
  }
`;

export const ImageThumb = styled.div`
  width: 240px;
  height: 240px;

  flex: 0 0 auto;

  overflow: hidden;

  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const CardData = styled.div`
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const CardDataItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.greyText};
  background-color: transparent;

  border-radius: ${p => p.theme.radii.round};

  outline: none;
  border: none;

  padding: 0;

  cursor: pointer;

  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentHover};
  }

  &:disabled {
    color: ${p => p.theme.colors.disabledBtn};
  }

  @media screen and (min-width: 768px) {
    padding: 10px;

    background-color: ${p => p.theme.colors.background};
  }
`;

export const CardDataItemTitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;
