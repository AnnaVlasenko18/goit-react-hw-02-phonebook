import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormText = styled.label`
  font-size: ${props => props.theme.fontSize.fs18};
`;

export const ContactDelete = styled.button`
  height: 30px;
  padding: ${p => p.theme.spacing(1)};
  font: inherit;
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
  color: ${props => props.theme.colors.backgroundBorder};

  &:hover {
    border-radius: ${props => props.theme.radii.sm};
    background: ${props => props.theme.colors.backgroundBorder};
    color: ${props => props.theme.colors.background};
  }
`;
