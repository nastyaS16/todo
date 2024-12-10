import { Tab, Tabs, Typography } from "@mui/material";
import { TABS } from "../../constants/todo";

const TodoTabs = ({
  activeTab,
  onChange,
}: {
  activeTab: number;
  onChange: (value: number) => void;
}) => (
  <Tabs value={activeTab} onChange={(_, value) => onChange(value)} centered>
    {TABS.map((tab, index) => (
      <Tab key={index} label={tab.label} />
    ))}
  </Tabs>
);

export default TodoTabs;
