import styled from 'styled-components';

export const AddPetModal = styled.div`
  width: 280px;
  padding: 40px 20px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.medium};
`;

export const Title = styled.h2`
  margin-bottom: ${p => (p.isLastStep ? '20px' : '28px')};

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.m};
  text-align: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 40px;
`;

export const Button = styled.button`
  min-width: 180px;
  padding: 7px 16px;

  font-family: ${p => p.theme.fontFamily.smallText};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.m};
  letter-spacing: 0.04em;

  border: ${p => p.theme.borders.orange};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.accentHover};
    border-color: ${p => p.theme.colors.accentHover};
  }

  :active {
    transform: scale(0.97);
  }
`;

export const BtnSecondary = styled(Button)`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.mainText};

  :hover {
    background-color: ${p => p.theme.colors.background};
    border-color: ${p => p.theme.colors.accentHover};
  }
`;
