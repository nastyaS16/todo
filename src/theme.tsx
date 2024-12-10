import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // Зеленый цвет
    },
    secondary: {
      main: "#ff5722", // Оранжевый цвет
    },
    background: {
      default: "#fff", // Светло-серый фон
    },
  },
  shape: {
    borderRadius: 16, // Круглые углы для всех компонентов
  },
});

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
