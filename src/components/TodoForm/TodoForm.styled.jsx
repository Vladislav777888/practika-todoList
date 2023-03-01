import styled from 'styled-components';

export const Button = styled.button`
  height: 29px;
  padding: 0 20px;

  display: inline-flex;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};
  background-image: linear-gradient(
    ${p => p.theme.colors.blue} 50%,
    ${p => p.theme.colors.yellow} 50%
  );
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  :not(:first-child) {
    margin-top: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.red};
`;
