import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";

const App = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
