import rules from "./rules";

const check = (role, action) => {
  const allowedPermissions = rules[role.toUpperCase()];

  if (!allowedPermissions) {
    // we do not have the user's role
    return false;
  }

  const staticPermissions = allowedPermissions.static;

  if (staticPermissions && staticPermissions.includes(action)) {
    return true;
  }
};

const Can = (props) =>
  check(props.role, props.perform) ? props.yes(props) : props.no();

export default Can;
