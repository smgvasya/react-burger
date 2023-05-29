import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../services/actions/user";
import { getCookie } from "../utils/cookie";
import PropTypes from "prop-types";

export function ProtectedRouteElement({ children, anonymous = false }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const request = useSelector((state) => state.auth.request);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const refreshToken = getCookie("refreshToken");
  const from = location.state?.from || "/";

  useEffect(() => {
    if (!user && refreshToken) {
      dispatch(getUserInfo());
    }
  }, [refreshToken, user, dispatch]);

  if (request) {
    return null;
  }
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}


ProtectedRouteElement.propTypes = {
  children: PropTypes.node.isRequired,
  anonymous: PropTypes.bool.isRequired,
};
