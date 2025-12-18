import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import TodoMainPage from "./TodoList/TodoMainPage";
import WeatherMainPage from "./Weather/WeatherMainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/todo" element={<TodoMainPage />}></Route>
          <Route path="/weather" element={<WeatherMainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
