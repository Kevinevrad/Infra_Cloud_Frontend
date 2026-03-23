import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";

function App() {
  const loadUser = useAuthStore((state) => state.loadUserFromStorage);
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
