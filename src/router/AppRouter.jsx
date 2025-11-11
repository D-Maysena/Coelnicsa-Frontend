import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/dashboard/Home";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login"element={<Login/>}  />
      </Routes>
    </>
  );
}

export default AppRouter;
