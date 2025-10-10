import { Route, Routes } from "react-router";
import Login from "../pages/auth/login";
import Home from "../pages/dashboard/home";

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
