import { Box } from './Box';
import { TodoForm } from './TodoForm/index';
import { TodoList } from './TodoList/index';

export function App() {
  return (
    <Box
      pt={20}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <TodoForm />
      <TodoList />
    </Box>
  );
}
