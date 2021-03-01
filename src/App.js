import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserCreatePage from "./pages/user-create";
import UserDetailPage from "./pages/user-detail";
import UsersPage from "./pages/users";
import Can from "./components/Can";
import Sidebar from "./components/sidebar";
import AccessDenied from "./components/access-denied";

const userData = {
  name: "John Oge",
  role: "manager"
};

const RolesComponent = ({ component: Component, perform, ...rest }) => {
  return (
    <Can
      role={userData.role}
      perform={perform}
      yes={(localProps) => <Component {...rest} {...localProps} />}
      no={() => <AccessDenied />}
    />
  );
};

export default function App() {
  return (
    <Router>
      <Sidebar userRole={userData.role} />
      <Switch>
        <Route exact path="/">
          <RolesComponent component={UsersPage} path="/" perform="users:list" />
        </Route>
        <Route path="/details">
          <UserDetailPage />
        </Route>
        <Route path="/create">
          <UserCreatePage />
        </Route>
      </Switch>
    </Router>
  );
}
