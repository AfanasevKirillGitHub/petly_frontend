import styled from 'styled-components';

export const Modal = styled.div`
  width: 608px;
  max-height: max-content;
  background-color: #fff;
  border-radius: 16px;

  padding: 40px 82px;
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.bxl};
  line-height: ${p => p.theme.lineHeights.m};
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export const Button = styled.button`
  min-width: 180px;
  padding: 9px 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.l};
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
