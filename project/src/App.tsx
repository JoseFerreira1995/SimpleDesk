import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import TodoMainPage from "./TodoList/TodoMainPage";
import WeatherMainPage from "./Weather/WeatherMainPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./components/themeProvider";
import CalculatorMainPage from "./Calculator/CalculatorMainPage";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/todo" element={<TodoMainPage />}></Route>
              <Route path="/weather" element={<WeatherMainPage />}></Route>
              <Route
                path="/calculator"
                element={<CalculatorMainPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
