import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../services/actions/user";
import { getCookie } from "../utils/cookie";
import PropTypes from "prop-types";

const ProtectedRouteElement = () => {
  const { request, user } = useSelector((state) => state.auth);
  const refreshToken = getCookie("refreshToken");
  const accessToken = getCookie("accessToken");
  const location = useLocation();
  const [isRequestSent, setRequestSent] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserInfo());
      setRequestSent(true);
  }, [dispatch]);

  if (request || !isRequestSent ) {
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
