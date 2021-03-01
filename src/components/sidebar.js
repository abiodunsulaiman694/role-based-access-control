import Can from "./Can";
import { Link } from "react-router-dom";

const Sidebar = ({ userRole }) => (
  <ul>
    <Can
      role={userRole}
      perform="users:list"
      yes={() => (
        <li>
          <Link to="/">Users</Link>
        </li>
      )}
      no={() => null}
    />

    <Can
      role={userRole}
      perform="users:create"
      yes={() => (
        <li>
          <Link to="/create">Create User</Link>
        </li>
      )}
      no={() => null}
    />

    <Can
      role={userRole}
      perform="users:detail"
      yes={() => (
        <li>
          <Link to="/details">Delete User</Link>
        </li>
      )}
      no={() => null}
    />
  </ul>
);

export default Sidebar;
