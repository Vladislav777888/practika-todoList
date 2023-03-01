import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  margin-top: 20px;
  background-color: ${p => p.theme.colors.gray};
  width: 570px;
`;

export const StyledItem = styled.li`
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

export const StyledTodoList = styled.ul`
  margin-top: 20px;
  width: 570px;
`;
