import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../header/app-header";
import { ProtectedRouteElement } from "../protected-route-element";
import Modal from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
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
import { useEffect } from "react";
import { updateToken } from "../../services/actions/user";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { getCookie } from "../../utils/cookie";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const refreshToken = getCookie("refreshToken");
  const dispatch = useDispatch();

  const background = location.state && location.state.background;
  // const background = location.state && location.state.modal;

  const navigate = useNavigate();

  const stepBack = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   !isLoggedIn && refreshToken && dispatchEvent(updateToken(refreshToken));
  // }, [isLoggedIn, refreshToken]);

  // useEffect(() => {
  //   dispatch(getIngredients());
  // }, [dispatch]);

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
        <Route path="ingredients/:id" element={<IngredientPage />} />
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
