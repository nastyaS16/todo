import { Box, Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

interface TodoInputProps {
  addTodo: (title: string) => void;
}

const Form: FC<TodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    console.log(title);
    if (title.trim().length) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "10px", mb: 2 }}>
      <TextField
        label="Enter new task"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
      >
        Add
      </Button>
    </Box>
  );
};

export default Form;
