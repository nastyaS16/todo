import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("adds a new task", () => {
    render(<App />);

    const input = screen.getByLabelText(/enter new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a task's checked state", () => {
    render(<App />);

    const input = screen.getByLabelText(/enter new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    // Add a new task
    fireEvent.change(input, { target: { value: "Task to toggle" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("filters tasks", () => {
    render(<App />);

    const input = screen.getByLabelText(/enter new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    // Add tasks
    fireEvent.change(input, { target: { value: "Active Task" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Completed Task" } });
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]); // Mark second task as completed

    // Switch to Active tab
    const activeTab = screen.getByRole("tab", { name: /active/i });
    fireEvent.click(activeTab);

    expect(screen.getByText("Active Task")).toBeInTheDocument();
    expect(screen.queryByText("Completed Task")).not.toBeInTheDocument();

    // Switch to Completed tab
    const completedTab = screen.getByRole("tab", { name: /completed/i });
    fireEvent.click(completedTab);

    expect(screen.getByText("Completed Task")).toBeInTheDocument();
    expect(screen.queryByText("Active Task")).not.toBeInTheDocument();
  });

  test("deletes all tasks", () => {
    render(<App />);

    const input = screen.getByLabelText(/enter new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    // Add a new task
    fireEvent.change(input, { target: { value: "Task to delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /delete all/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });
});
