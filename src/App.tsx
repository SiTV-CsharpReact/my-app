import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import './App.scss'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
     {routes}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;