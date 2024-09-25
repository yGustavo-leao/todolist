import { TaskList } from "./components/TaskList/TaskList";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <TaskList />
    </ThemeProvider>
  );
}

export default App;
