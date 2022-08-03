import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <nav>
        <Link to="/todo">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo/done">Done</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
