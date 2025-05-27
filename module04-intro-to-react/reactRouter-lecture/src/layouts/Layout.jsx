import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
