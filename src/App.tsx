import React, { useState } from "react";
import { Box, Button, Typography, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomThemeProvider } from "./theme";
import { ToDoList, TodoTabs, Form } from "./components";
import { Todo } from "./types/types";
import { TABS } from "./constants/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTab, setActiveTab] = React.useState(0);

  const addTodo = (title: string) => {
    const newToDo: Todo = { id: Date.now(), title, checked: false };
    setTodos((prev) => [...prev, newToDo]);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const filteredTodos = React.useMemo(() => {
    return todos.filter(TABS[activeTab].filter);
  }, [todos, activeTab]);

  return (
    <CustomThemeProvider>
      <Box
        sx={(theme) => ({
          mx: 24,
          [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            mx: 1,
          },
        })}
      >
        <Typography variant="h4" mb={4} textAlign={"center"}>
          To do
        </Typography>
        <Form addTodo={addTodo} />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TodoTabs activeTab={activeTab} onChange={setActiveTab} />
          <ToDoList todos={filteredTodos} handleToggle={handleToggle} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography>Total: {todos.length}</Typography>
            <Typography>
              Active: {todos.filter((todo) => !todo.checked).length}
            </Typography>
            <Typography>
              Done: {todos.filter((todo) => todo.checked).length}
            </Typography>
          </Box>
          <Button startIcon={<DeleteIcon />} onClick={() => setTodos([])}>
            Delete All
          </Button>
        </Box>
      </Box>
    </CustomThemeProvider>
  );
}

export default App;
