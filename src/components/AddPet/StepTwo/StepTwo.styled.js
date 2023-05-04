import { IoAddSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

export const PhotoLabel = styled(Label)`
  gap: 20px;
`;

export const PhotoTitle = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};
`;

export const LoadImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: center;

  width: 208px;
  height: 208px;

  cursor: pointer;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  overflow: hidden;
`;

export const PetImg = styled.img`
  object-fit: cover;

  width: 100%;
  height: 100%;
`;

export const Plus = styled(IoAddSharp)`
  width: 70px;
  height: 70px;
  color: ${p => p.theme.colors.greyText};
`;

export const InputImage = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Comments = styled.textarea`
  resize: none;
  display: block;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 14px;
  padding-right: 14px;
  width: 100%;
  height: 100px;

  outline: ${p => p.theme.borders.input};
  border: none;

  border-radius: ${p => p.theme.radii.medium};
  background-color: ${p => p.theme.colors.background};

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.m};

  :focus-within {
    outline: 1px solid #ff6101;
  }

  ::placeholder {
    color: ${p => p.theme.colors.placeholders};
  }
`;
