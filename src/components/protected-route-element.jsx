import { Navigate, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../services/actions/user';
import { getCookie } from '../utils/cookie';
import PropTypes from 'prop-types';

const ProtectedRouteElement = ({element}) => {

  const {request, user} = useSelector((state) => state.auth);
 const refreshToken = getCookie("refreshToken");
 const accessToken = getCookie("accessToken");
  const location = useLocation();
  // const { state, pathname} = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(getUserInfo());
    }
  }, [dispatch, user]);

  if (request) {
    return null;
  }

  return user ? element : <Navigate to="/login" replace={false} />;
}


ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired
}

export default ProtectedRouteElement;
