import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import Navigation from "../Navigation";

const RootLayout = () => {
  return (
    <>
      <Link to="/about">about</Link>
      <Outlet />
    </>
  );
};

export default RootLayout;
