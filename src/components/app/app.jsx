import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../header/app-header";

import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFound404,
  HomePage,
} from "../../pages";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state?.background;

  // const loading = useSelector((state) => state.ingredients.loaded);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getIngredients());
  // }, [dispatch]);

  return (
    <>
      <AppHeader />
      {/* {loading ? (
        <h1 className={`${styles.loading} text text_type_digits-medium`}>
          Загрузка..
        </h1>
      ) : ( */}
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {/* <Routes>
        {background && (
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                onClose={() => {
                  navigate(-1);
                }}
              >
                <IngredientDetails />
              </Modal>
            }
          />
        )}
      </Routes> */}
      {/* )} */}
    </>
  );
};

export default App;
