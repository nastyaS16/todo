import { Todo } from "../types/types";

export const TABS = [
  { label: "All", filter: () => true },
  { label: "Active", filter: (todo: Todo) => !todo.checked },
  { label: "Completed", filter: (todo: Todo) => todo.checked },
];
