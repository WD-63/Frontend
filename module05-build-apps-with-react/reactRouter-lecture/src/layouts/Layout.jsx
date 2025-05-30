import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Layout = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="app-container">
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <main className="content">
        <Outlet context={{ signedIn, setSignedIn }} />
      </main>
    </div>
  );
};

export default Layout;
