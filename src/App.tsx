import { BrowserRouter } from "react-router";
import Router from "./routes/router";
import { ToastProvider } from "./contexts/toast-context";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
