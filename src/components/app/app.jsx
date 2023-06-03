import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../header/app-header";
import { ProtectedRouteElement } from "../protected-route-element";
import Modal from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { FeedDetails } from "../feed-details/feed-details ";
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
  FeedPage,
  OrderPage,
} from "../../pages";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIngredients } from "../../services/actions/burger-ingredients";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const background = location.state && location.state.background;

  const stepBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="feed/:id" element={<OrderPage />} />
        <Route path="feed" element={<FeedPage />} />

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
          path="/profile/orders/:id"
          element={
            <ProtectedRouteElement anonymous={false}>
              <OrderPage />
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
          <Route
            path="feed/:id"
            element={
              <Modal onClose={stepBack}>
                <FeedDetails />
              </Modal>
            }
          />
          <Route
            path="profile/orders/:id"
            element={
              <ProtectedRouteElement anonymous={false}>
                <Modal onClose={stepBack}>
                  <FeedDetails />
                </Modal>
              </ProtectedRouteElement>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
