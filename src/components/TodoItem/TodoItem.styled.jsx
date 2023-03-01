import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.gray};

  & + & {
    margin-top: 15px;
  }
`;

export const ListItemContent = styled.p`
  display: flex;
  justify-content: center;
  width: 150px;
  & + & {
    margin-left: 30px;
  }

  &:first-child {
    width: 30px;
  }
`;

export const StyledCheckbox = styled.input`
  display: flex;
  justify-content: center;
  margin-left: 94px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
