import {
  Alert,
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { Todo } from "../../types/types";
import { CheckCircleOutline } from "@mui/icons-material";

type ToDoList = {
  todos: Todo[];
  handleToggle: (id: number) => void;
};

const ToDoList: FC<ToDoList> = ({ todos, handleToggle }) => {
  return (
    <Box sx={{ display: "flex", gap: "10px", mb: 2 }}>
      {todos.length ? (
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} disablePadding>
              <Checkbox
                checked={todo.checked}
                onChange={() => handleToggle(todo.id)}
              />
              <ListItemText id={todo.id.toString()} primary={todo.title} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Alert severity="info" sx={{ width: "100%", mt: 2 }}>
          You have no tasks yet... Let's create one
        </Alert>
      )}
    </Box>
  );
};

export default ToDoList;
