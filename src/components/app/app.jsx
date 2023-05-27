import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import AppHeader from "../header/app-header";
import { ProtectedRouteElement } from "../protected-route-element";
import Modal from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
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
    navigate("/");
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="login"
          element={
            <ProtectedRouteElement anonymous={true}>
              <LoginPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRouteElement anonymous={true}>
              <RegisterPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="reset-password"
          element={
            <ProtectedRouteElement anonymous={true}>
              <ResetPasswordPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="forgot-password"
          element={
            <ProtectedRouteElement anonymous={true}>
              <ForgotPasswordPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="profile/*"
          element={
            <ProtectedRouteElement anonymous={false}>
              <ProfilePage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="profile/orders"
          element={
            <ProtectedRouteElement anonymous={false}>
              <ProfileOrders />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="profile/orders:id"
          element={
            <ProtectedRouteElement anonymous={false}>
              <ProfileOrders />
            </ProtectedRouteElement>
          }
        />
        <Route path="ingredients/:id" element={ <IngredientPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal onClose={stepBack}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
