import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../header/app-header";
import { ProtectedRouteElement } from "../protected-route-element";
import Modal from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { FeedDetails } from "../feed-details/feed-details ";

import {
  HOME,
  INGREDIENTS,
  FEED,
  LOGIN,
  REGISTRATION,
  FORGOT_PSW,
  UPDATE_PSW,
  PROFILE,
  ORDERS_PROFILE,
  ERROR,
} from "../../utils/constants";

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

import { useDispatch } from "../../services/types/hooks";
import { useEffect } from "react";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo } from "../../services/actions/user";

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
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={HOME} element={<HomePage />} />
        <Route path={`${FEED}/:id`} element={<OrderPage />} />
        <Route path={FEED} element={<FeedPage />} />

        <Route
          path={LOGIN}
          element={
            <ProtectedRouteElement anonymous={true}>
              <LoginPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={REGISTRATION}
          element={
            <ProtectedRouteElement anonymous={true}>
              <RegisterPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={UPDATE_PSW}
          element={
            <ProtectedRouteElement anonymous={true}>
              <ResetPasswordPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={FORGOT_PSW}
          element={
            <ProtectedRouteElement anonymous={true}>
              <ForgotPasswordPage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={PROFILE}
          element={
            <ProtectedRouteElement anonymous={false}>
              <ProfilePage />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={ORDERS_PROFILE}
          element={
            <ProtectedRouteElement anonymous={false}>
              <ProfileOrders />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={`${ORDERS_PROFILE}/:id`}
          element={
            <ProtectedRouteElement anonymous={false}>
              <OrderPage />
            </ProtectedRouteElement>
          }
        />
        <Route path={`${INGREDIENTS}/:id`} element={<IngredientPage />} />
        <Route path={ERROR} element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path={`${INGREDIENTS}/:id`}
            element={
              <Modal onClose={stepBack}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={`${FEED}/:id`}
            element={
              <Modal onClose={stepBack}>
                <FeedDetails />
              </Modal>
            }
          />
          <Route
            path={`${ORDERS_PROFILE}/:id`}
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
