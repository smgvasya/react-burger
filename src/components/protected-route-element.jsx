import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../services/actions/user";
import PropTypes from "prop-types";

const ProtectedRouteElement = () => {
  const { request, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isAuth, setAuth] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserInfo());
      setAuth(true);
  }, [dispatch]);

  if (request || !isAuth ) {
    return null;
  }

  return user ?  <Outlet/> : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRouteElement;
