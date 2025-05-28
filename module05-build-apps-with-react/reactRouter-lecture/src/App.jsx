import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
