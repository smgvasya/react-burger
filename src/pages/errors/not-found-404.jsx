import styles from "./not-found-404.module.css";
import { Link } from "react-router-dom";

export const NotFound404 = () => {
  return (
    <div className={styles.container}>
      <h1 className='text text_type_digits-large'>
        Oops! 404 Error
      </h1>
      <p className="text text_type_main-default text_color_inactive pt-15">
        The planet you requested does not exist
      </p>
      <div className={styles.img}></div>
      <p className="text text_type_main-default text_color_inactive pt-2">
        We have sent a rescue team after you, they will take you to a{" "}
        <Link
          to="/"
          className={`${styles.link} text text_type_main-default pl-2"`}
        >
          safe place
        </Link>
      </p>
      <div className={styles.planet}></div>
    </div>
  );
};
