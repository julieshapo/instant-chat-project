import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

export const PrivatRoute = ({ children }) => {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

PrivatRoute.propTypes = {
  children: PropTypes.node,
};
