import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout, AppLayout } from "components/Layouts";
import { Home, Register, Login, AddPost, DetailPost } from "pages";
import { Loading, Navbar } from "components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshLogin } from "redux/actions/authAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshLogin());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Loading />

      <div className="container mt_40">
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="add_post" element={<AddPost />} />
            <Route path="post/:id" element={<DetailPost />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
