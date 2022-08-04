import { Link, Outlet } from "react-router-dom";
import "../todo/TodoList.css";
function Layout() {
  return (
    <div className="layout">
      <nav className="item">
        <Link className="link" to="/">
          Home
        </Link>{" "}
        &nbsp;
        <Link className="link" to="/about">
          About
        </Link>{" "}
        &nbsp;
        <Link className="link" to="/todo/done">
          Done
        </Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
