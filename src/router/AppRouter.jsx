import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import Movies from "../page/Movies";
import { useSelector } from "react-redux";
import Detail from "../page/Detail";

const AppRouter = () => {
  const login = useSelector((state) => state.login.value);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/movie/:id" element={<Detail />} />
          {login ? (
            <Route path="/movies" element={<Movies />} />
          ) : (
            <Route path="/movies" element={<Register />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
