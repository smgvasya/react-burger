import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import AppHeader from "../header/app-header";
import ProtectedRouteElement from "../protected-route-element";
import Modal from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "../../utils/cookie";
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFound404,
  HomePage,
  ProfileOrders,
  IngredientPage,
} from "../../pages";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state?.background;
  const stepBack = () => {
    navigate('/');
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route element={<ProtectedRouteElement />}>
          <Route path="profile/*" element={<ProfilePage />} />
          <Route path="profile/orders" element={<ProfileOrders />} />
          <Route path="profile/orders:id" element={<ProfileOrders />} />
        </Route>
        <Route path="ingredients/:id" element={<IngredientPage />}/>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Routes>
        {background && (
          <Route
            path="ingredients/:id"
            element={
              <Modal onClose={stepBack}>
                <IngredientDetails />
              </Modal>
            }
          />
        )}
      </Routes>
    </>
  );
};

export default App;
